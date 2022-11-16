import { prisma } from '../config/database.js';

async function getById(id: number) {
	try {
		return await prisma.transaction.findFirst({
			where: {
				id,
			},
		});
	} catch (error) {
		console.log(error);
	}
}

async function getByAccountId(id: number) {
	try {
		return await prisma.account.findFirst({
			where: {
				id,
			},
			select: { id: false, balance: false, TransactionDebit: true, TransactionCredit: true },
		});
	} catch (error) {
		console.log(error);
	}
}

const transactionRepository = {
	getById,
	getByAccountId,
};

export default transactionRepository;
