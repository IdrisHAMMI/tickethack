import mongoose, { Schema, Document } from "mongoose";

export interface ICart extends Document {
  departure: string;
  arrival: string;
  date: Date;
  price: number;
}

const CartSchema: Schema = new Schema({
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
});

export default mongoose.model<ICart>('Cart', CartSchema);