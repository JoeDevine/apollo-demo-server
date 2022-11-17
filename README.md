# Apollo Demo Server

## Start the Subgraph

```
cd subgraph-demo
npm start
```

## Start the router locally

```
# From project root
npm run router:local
```

## Start the Open Telemetry Collector

```
# Download Open telemetry Collector for Mac M1
curl -O -L https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.63.0/otelcol_0.63.0_darwin_arm64.tar.gz
tar -xvf otelcol_0.63.0_darwin_arm64.tar.gz

# Run collector with the local config
npm run otlp:start
```

## Start the gRPC Server to consume output of Open Telemetry Collector

```
cd grpc-receiver
npm start
```

## Query metrics of the Collector

```
http://localhost:8888/metrics
```
