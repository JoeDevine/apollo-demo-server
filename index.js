import { buildSubgraph as demo } from "./subgraph-demo/index.js";

(async () => {
  await Promise.all([demo()]);
})();
