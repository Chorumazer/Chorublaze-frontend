import * as fs from "fs";
import databaseProps from "./struct/data";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  if (email === null || password === null)
    return { message: "email and password can't is null" };

  try {
    const filePath: string = "./server/database/database.json";
    const fileContent = await fs.promises.readFile(filePath, "utf-8");
    const jsonData: databaseProps[] = JSON.parse(fileContent);

    if (jsonData.some((item) => item.email === email && item.password === password)) {
      return { message: "ok" };
    } else {
      return { message: "error" };
    }
  } catch (err) {
    return {
      error: err,
    };
  }
});
