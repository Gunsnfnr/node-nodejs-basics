import * as fsPromises from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  try {
    await fsPromises.cp(
      path.join(__dirname, "files"),
      path.join(__dirname, "files_copy "),
      { recursive: true, force: false, errorOnExist: true }
    );
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
