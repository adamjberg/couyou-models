/// <reference types="mongoose" />
import * as mongoose from "mongoose";
export declare const UserSchema: mongoose.Schema;
export interface IUser {
    email?: string;
    password?: string;
}
export interface IUserDocument extends IUser, mongoose.Document {
}
export declare const User: mongoose.Model<IUserDocument>;
