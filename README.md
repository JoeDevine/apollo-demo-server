[![Deploy Demo Subgraph](https://github.com/JoeDevine/apollo-demo-server/actions/workflows/demo.yaml/badge.svg)](https://github.com/JoeDevine/apollo-demo-server/actions/workflows/demo.yaml)

# Apollo Demo Server

## Overview

This repo is built as a sandbox example repository for demonstrating features and capabilities of the Apollo eco-system, primarily focussed on the capabilities of the Apollo Router. Below is an overview of the project architecture and each of the different services with it's associated port.

![demoRepo](https://user-images.githubusercontent.com/10652753/214587816-b753169a-41e1-4283-967c-7a0fba3646cd.png)

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

### Compose supergraph locally

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

## Run Prometheus

This repo contains a working example of collecting metrics in Prometheus locally. There are some nuances to how prometheus collects metrics and how Router makes these metrics available. Router doesn't connect to Prometheus directly, instead it exposes the appropriately formatted metrics for prometheus on a specific port. Below is the config for making this possible within the `router-config.yaml` file in the root of the repo:

```
telemetry:
  metrics:
    prometheus:
      enabled: true
      listen: 0.0.0.0:9095
      path: /metrics
```

This config makes appropriately formatted metrics available on port `9095` from the router. It's possible to test this by simply running the router and navigating to `http://localhost:9095/metrics`. The next step is to have a running instance of Prometheus with this port configured as a target to scrape the available metrics. Once you have a running instance of Prometheus after following the [Prometheus Getting Started steps](https://prometheus.io/docs/introduction/first_steps/), it is possible to configure the instance of Prometheus programatically by adding the following to the `prometheus.yml` config file used on startup:

```
scrape_configs:
    static_configs:
      - targets: ['0.0.0.0:9090', '0.0.0.0:9095']
```

Once this is in place, you should be able to navigate to the Prometheus GUI (i.e. `http://localhost:9090/graph`) and see the metrics from Router being pulled through.

## Graphana Setup

Once you have Prometheus running and collecting metrics from Router successfully, Grafana is easily configured as it has native support for Prometheus. The key step for integrating with Prometheus is adding it as a Datasource as shown below:

![image](https://user-images.githubusercontent.com/10652753/214591328-87e950c7-b7b7-48a0-98d2-82fda06952bd.png)

Note: Be careful to target the running instance of Prometheus and not the exposed metrics from Router directly.

Once this has been configured you should be able to build custom dashboards as required by leveraging the assigned datasource.

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
