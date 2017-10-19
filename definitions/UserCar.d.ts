/// <reference types="mongoose" />
import * as mongoose from 'mongoose';
export declare const UserCarSchema: mongoose.Schema;
export interface IUserCar {
    user: mongoose.Types.ObjectId;
    car: mongoose.Types.ObjectId;
}
export interface IUserCarDocument extends IUserCar, mongoose.Document {
}
export declare const UserCar: mongoose.Model<IUserCarDocument>;
