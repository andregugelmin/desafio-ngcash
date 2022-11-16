import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { unauthorizedError } from '../utils/errorUtils.js';

export function validateToken(req: Request, res: Response, next: NextFunction) {
	const authorization = req.headers['authorization'];
	const token = authorization?.replace('Bearer ', '');
	if (!token) {
		throw unauthorizedError('No token');
	}

	const userDecoded = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			throw unauthorizedError('invalid access token');
		}
		return decoded;
	});

	res.locals.user = userDecoded;

	next();
}
