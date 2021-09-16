import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Account } from 'src/accounts/entities/account.entity';

export enum TransactionCategory {
  CATEGORY1 = 'Category1',
  CATEGORY2 = 'Category2',
}

export enum TransactionType {
  CREDTI = 'Credit',
  DEBIT = 'Debit',
}

export const TransactionCategoryList: Array<string> =
  Object.values(TransactionCategory);
export const TransactionTypeList: Array<string> =
  Object.values(TransactionType);

@Table({
  tableName: 'transactions',
  createdAt: 'created_at',
  updatedAt: 'upated_at',
})
export class Transaction extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({ allowNull: false })
  payment_date: Date;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  description: string;

  @Column({ allowNull: false })
  category: TransactionCategory;

  @Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
  amount: number;

  @Column({ allowNull: false })
  type: TransactionType;

  @ForeignKey(() => Account)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  account_id: string;

  @BelongsTo(() => Account)
  account: Account;
}
