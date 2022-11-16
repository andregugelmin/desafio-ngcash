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
			select: { id: false, username: false, account: true },
		});
	} catch (error) {
		console.log(error);
	}
}

const accountRepository = {
	getById,
	getByUserID,
};

export default accountRepository;
