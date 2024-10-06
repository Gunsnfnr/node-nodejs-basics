import * as os from "os";
import { Worker, workerData } from "node:worker_threads";
import path from "node:path";
import { fileURLToPath } from "url";
import readline from "node:readline";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cpuCount = os.cpus().length;
const initialValue = 10;
function createWorkerThread(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname, "worker.js"), {
      workerData,
    });
    worker.on("message", resolve);
    worker.on("error", reject);
  });
}

const performCalculations = async () => {
  const resArray = [];
  for (let i = initialValue; i <= initialValue + cpuCount - 1; i += 1) {
    await createWorkerThread(i)
      .then((result) => {
        resArray.push({ status: "resolved", data: result });
      })
      .catch((err) => {
        resArray.push({ status: "error", data: null });
      });
  }
  console.log(resArray);
};

await performCalculations();
