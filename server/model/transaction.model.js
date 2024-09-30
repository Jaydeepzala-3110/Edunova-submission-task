import { Schema, model } from 'mongoose';

const TransactionSchema = new Schema({
  bookId: {
    type: Schema.Types.ObjectId,
    ref: 'Books',
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  issueDate: {
    type: Date,
    required: true
  },
  returnDate: {
    type: Date
  },
  rentCalculated: {
    type: Number
  }
}, { timestamps: true });

const TransactionModel = model('Transaction', TransactionSchema);

export default TransactionModel;
