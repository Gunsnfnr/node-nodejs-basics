import * as fsPromises from "node:fs/promises";
import { access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  try {
    await access(path.join(__dirname, "/files/fileToRemove.txt"));

    fsPromises.rm(path.join(__dirname, "/files/fileToRemove.txt"));
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
