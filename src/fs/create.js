import * as fsPromises from "node:fs/promises";
import { access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  try {
    await access(path.join(__dirname, "fresh.txt"));
    fsPromises
      .readFile(path.join(__dirname, "fresh.txt"))
      .then((data) => {
        throw new Error("FS operation failed");
      })
      .catch(err);
  } catch (err) {
    const promise = fsPromises.writeFile(
      path.join(__dirname, "fresh.txt"),
      "I am fresh and young"
    );
    await promise;
  }
};

await create();
