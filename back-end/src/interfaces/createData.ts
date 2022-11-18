import { Account, Transaction, User } from '@prisma/client';

export type CreateUserData = Omit<User, 'id' | 'accountId'>;
export type CreateAccountData = Omit<Account, 'id'>;
export type CreateTransactionData = Omit<Transaction, 'id' | 'createdAt'>;
