import { readdir, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  try {
    await access(path.join(__dirname, "/files"));

    const files = await readdir(path.join(__dirname, "/files"));
    for (const file of files) console.log(file);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
