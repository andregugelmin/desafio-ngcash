import { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';

export function validateSchema(schema: ObjectSchema) {
	return (req: Request, res: Response, next: NextFunction) => {
		const validation = schema.validate(req.body);
		if (validation.error) {
			console.log(validation.error.message);
			return res.status(422).send({ error: validation.error.message });
		}

		next();
	};
}
