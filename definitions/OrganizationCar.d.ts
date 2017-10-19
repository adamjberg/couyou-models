/// <reference types="mongoose" />
import * as mongoose from 'mongoose';
export declare const OrganizationCarSchema: mongoose.Schema;
export interface IOrganizationCar {
    organization: mongoose.Types.ObjectId;
    car: mongoose.Types.ObjectId;
}
export interface IOrganizationCarDocument extends IOrganizationCar, mongoose.Document {
}
export declare const OrganizationCar: mongoose.Model<IOrganizationCarDocument>;
