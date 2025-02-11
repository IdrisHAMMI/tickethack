import mongoose, { Schema, Document } from 'mongoose';

export interface ITrip extends Document {
  departure: string;
  arrival: string;
  date: Date;
  price: number;
}

const TripSchema: Schema = new Schema({
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
});

export default mongoose.model<ITrip>('Trip', TripSchema);