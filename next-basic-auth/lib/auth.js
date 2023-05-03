import { compare, hash } from 'bcryptjs';

const hashPassword = async (password) => await hash(password, 12);

const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

export { hashPassword, verifyPassword };
