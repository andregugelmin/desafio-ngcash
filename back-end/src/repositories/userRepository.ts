import { prisma } from '../config/database.js';
import { CreateUserData } from '../interfaces/createData.js';

async function insert(createUserData: CreateUserData) {
	try {
		await prisma.$transaction(async (tx) => {
			const account = await tx.account.create({ data: {} });
			await tx.user.create({ data: { ...createUserData, accountId: account.id } });
		});
	} catch (error) {
		console.log(error);
	}
}

async function getByUsername(username: string) {
	try {
		return await prisma.user.findFirst({
			where: {
				username,
			},
		});
	} catch (error) {
		console.log(error);
	}
}

async function getById(id: number) {
	try {
		return await prisma.user.findFirst({
			where: {
				id,
			},
		});
	} catch (error) {
		console.log(error);
	}
}

const userRepository = {
	insert,
	getByUsername,
	getById,
};

export default userRepository;
