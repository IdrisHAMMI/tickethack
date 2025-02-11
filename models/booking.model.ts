import mongoose, { Schema, Document } from "mongoose";

export interface IBooking {
 departure: string;
 arrival: string;
 date: Date;
 price: number;
}