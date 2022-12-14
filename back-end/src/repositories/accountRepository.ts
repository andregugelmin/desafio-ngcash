import { prisma } from '../config/database.js';

async function getById(id: number) {
	try {
		return await prisma.account.findFirst({
			where: {
				id,
			},
		});
	} catch (error) {
		console.log(error);
	}
}

async function getByUserID(id: number) {
	try {
		return await prisma.user.findFirst({
			where: {
				id,
			},
			select: { id: false, username: true, account: true },
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
			select: { id: true, username: true, account: true },
		});
	} catch (error) {
		console.log(error);
	}
}

const accountRepository = {
	getById,
	getByUserID,
	getByUsername,
};

export default accountRepository;
