[![Deploy Demo Subgraph](https://github.com/JoeDevine/apollo-demo-server/actions/workflows/demo.yaml/badge.svg)](https://github.com/JoeDevine/apollo-demo-server/actions/workflows/demo.yaml)

# Apollo Demo Server

## Overview

This repo is built as a sandbox example repository for demonstrating features and capabilities of the Apollo eco-system, primarily focussed on the capabilities of the Apollo Router.

## Start the Subgraphs

There are currently 2 different example subgraphs built out with dummy responses (User and Demo) these can be started by using the following commands:

```
cd subgraph-demo
npm start
```

```
cd subgraph-user
npm start
```

### Create supergraph locally

This repo is built run standalone and therefore is built on the assumption that Supergraph composition is happening locally. This can be achieved by running the following in the root directory. Note that the output file and config file reference can be updated in the underlying command defined in the package.json

```
npm run compose
```

## Start the router locally

This project is built to leverage running a local binary instance of the Router. This can be installed and then run using the following commands in the root directory:

```
# From project root

# Will install the latest available version for Mac, the underlying request can be modified in package.json
npm run router:install

# This will run the installed local binary on the assumption a local composed supergraph has been created
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
