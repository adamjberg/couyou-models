/// <reference types="mongoose" />
import * as mongoose from 'mongoose';
export declare const OrganizationSchema: mongoose.Schema;
export interface IOrganization {
    name?: string;
}
export interface IOrganizationDocument extends IOrganization, mongoose.Document {
}
export declare const Organization: mongoose.Model<IOrganizationDocument>;
