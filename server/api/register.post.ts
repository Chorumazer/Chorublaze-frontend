import fs from "fs";

interface databaseProps {
  email: string;
  password: string;
}

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  const database: databaseProps[] = [{ email, password }];
  const jsonData = JSON.stringify(database, null, 2);

  try {
    fs.writeFileSync("./server/database/database.json", jsonData);
    return { result: "ok" };
  } catch (err) {
    return { result: `ERROR: ${err}` };
  }
});
