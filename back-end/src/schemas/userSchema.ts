import Joi from 'joi';

export const createUserSchema = Joi.object({
	username: Joi.string().min(3).required(),
	password: Joi.string()
		.min(8)
		.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]?)[A-Za-z\d@$!%*?&]{8,}/)
		.required(),
	confirmPassword: Joi.valid(Joi.ref('password')).required(),
});
