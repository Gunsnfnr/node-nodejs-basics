import * as fsPromises from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function throwFSFailureError() {
  throw new Error("FS operation failed");
}

const create = async () => {
  try {
    await fsPromises.writeFile(
      path.join(__dirname, "files", "fresh.txt"),
      "I am fresh and young",
      { flag: wx }
    );
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
