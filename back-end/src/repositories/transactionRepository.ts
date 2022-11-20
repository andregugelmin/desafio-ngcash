import { prisma } from '../config/database.js';
import { CreateTransactionData } from '../interfaces/createData.js';

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
			select: {
				TransactionDebit: {
					select: {
						id: true,
						value: true,
						createdAt: true,
						creditedAccount: {
							select: {
								User: true,
							},
						},
						debitedAccount: {
							select: {
								User: true,
							},
						},
					},
					orderBy: { createdAt: 'desc' },
				},
				TransactionCredit: {
					select: {
						id: true,
						value: true,
						createdAt: true,
						creditedAccount: {
							select: {
								User: true,
							},
						},
						debitedAccount: {
							select: {
								User: true,
							},
						},
					},
					orderBy: { createdAt: 'desc' },
				},
			},
		});
	} catch (error) {
		console.log(error);
	}
}

async function insert(data: CreateTransactionData) {
	try {
		await prisma.$transaction(async (tx) => {
			await tx.account.update({
				where: {
					id: data.creditedAccountId,
				},
				data: {
					balance: {
						increment: data.value,
					},
				},
			});
			await tx.account.update({
				where: {
					id: data.debitedAccountId,
				},
				data: {
					balance: {
						decrement: data.value,
					},
				},
			});
			await tx.transaction.create({
				data,
			});
		});
	} catch (error) {
		console.log(error);
	}
}

const transactionRepository = {
	getById,
	getByAccountId,
	insert,
};

export default transactionRepository;
