import { hash } from 'bcryptjs';

const hashPassword = async (password) => await hash(password, 12);

export default hashPassword;
