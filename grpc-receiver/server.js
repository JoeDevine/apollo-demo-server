import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import fs from "fs";
const PROTO_PATH = "./telemetry.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const telemetry_proto =
  grpc.loadPackageDefinition(packageDefinition).opentelemetry.proto.collector
    .metrics.v1;
const server_host = `0.0.0.0:${process.env.SERVER_PORT || 443}`;

const sendTelemetry = ({ request }) => {
  console.log("SendTelemetry Called", request);
  const filename = `./${Date.now()}-telemetry.json`;
  console.log("Writing file =>", filename);

  try {
    fs.writeFileSync(filename, JSON.stringify(request));
    // file written successfully
  } catch (err) {
    console.error(err);
  }
};

const server = new grpc.Server();

let credentials = grpc.ServerCredentials.createSsl(
  fs.readFileSync("./cert.pem"),
  [
    {
      cert_chain: fs.readFileSync("./ca.pem"),
      private_key: fs.readFileSync("./ca-key.pem"),
    },
  ],
  true
);

server.addService(telemetry_proto.MetricsService.service, {
  export: sendTelemetry,
});
server.bindAsync(server_host, credentials, (err) => {
  if (err) console.log("Error -> ", error);
  server.start();
});

console.info("GRPC server started at ", server_host);
