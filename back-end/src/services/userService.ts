import jwt from 'jsonwebtoken';
import userRepository from '../repositories/userRepository';
import { conflictError } from '../utils/errorUtils';
import { encryptPassword } from '../utils/passwordUtils.js';

async function createUser(username: string, password: string) {
	const passwordEncrypted = encryptPassword(password);
	const checkUsername = await userRepository.getByUsername(username);

	if (checkUsername) throw conflictError('Username already exists');

	await userRepository.insert({ username, password: passwordEncrypted });
}

async function signin(username: string, password: string) {
	const userDb = await getUserOrFailByUsername(username);

	verifyPassword(password, userDb.password);

	const token = jwt.sign({ email, id: userDb.id }, process.env.JWT_SECRET);

	return token;
}
async function getUserOrFailByUsername(username: string) {
	const user = await userRepository.getByUsername(id);
	if (!user) throw notFoundError('User not found');

	return user;
}

const userService = {
	createUser,
	signin,
};

export default userService;
