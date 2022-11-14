const https = require("https");
import express, { Express } from "express";
import morgan from "morgan";
import fs from "fs";
import routes from "./routes/telemetry";

const router: Express = express();

/** Logging */
router.use(morgan("dev"));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

/** RULES */
router.use((req, res, next) => {
  // set the CORS policy
  res.header("Access-Control-Allow-Origin", "*");
  // set the CORS headers
  res.header(
    "Access-Control-Allow-Headers",
    "origin, X-Requested-With,Content-Type,Accept, Authorization"
  );
  // set the CORS method headers
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST");
    return res.status(200).json({});
  }
  next();
});

/** Add Routes */
router.use("/", routes);

/** Server */
const httpsServer = https.createServer(
  {
    key: fs.readFileSync("./src/ca-key.pem"),
    cert: fs.readFileSync("./src/ca.pem"),
  },
  router
);
const PORT: any = process.env.PORT ?? 6060;
httpsServer.listen(PORT, () =>
  console.log(`The server is running on port ${PORT}`)
);
