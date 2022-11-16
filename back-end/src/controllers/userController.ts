import { Request, Response } from 'express';
import userService from '../services/userService.js';

export async function signup(req: Request, res: Response) {
	const { username, password } = req.body;

	await userService.createUser(username, password);
	res.sendStatus(201);
}

export async function singin(req: Request, res: Response) {
	const { username, password } = req.body;
	const token = await userService.signin(username, password);

	return res.send({ token }).status(200);
}
