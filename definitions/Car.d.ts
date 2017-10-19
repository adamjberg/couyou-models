/// <reference types="mongoose" />
import * as mongoose from 'mongoose';
export declare const CarSchema: mongoose.Schema;
export interface ICar {
    name?: string;
}
export interface ICarDocument extends ICar, mongoose.Document {
}
export declare const Car: mongoose.Model<ICarDocument>;
