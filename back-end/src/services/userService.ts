import jwt from 'jsonwebtoken';
import userRepository from '../repositories/userRepository.js';
import { conflictError, notFoundError } from '../utils/errorUtils.js';
import { encryptPassword, verifyPassword } from '../utils/passwordUtils.js';

async function createUser(username: string, password: string) {
	const passwordEncrypted = encryptPassword(password);
	const checkUsername = await userRepository.getByUsername(username);

	if (checkUsername) throw conflictError('Username already exists');

	await userRepository.insert({ username, password: passwordEncrypted });
}

async function signin(username: string, password: string) {
	const userDb = await getUserOrFailByUsername(username);

	verifyPassword(password, userDb.password);

	const token = jwt.sign({ username, id: userDb.id }, process.env.JWT_SECRET, { expiresIn: 86400 });

	return { username, token };
}

async function getUserOrFailByUsername(username: string) {
	const user = await userRepository.getByUsername(username);
	if (!user) throw notFoundError('User not found');

	return user;
}

const userService = {
	createUser,
	signin,
};

export default userService;
