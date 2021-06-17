import bcrypt from "bcryptjs";

export default async function encryptor(password) {
  return await bcrypt.hash(password, 10);
}
