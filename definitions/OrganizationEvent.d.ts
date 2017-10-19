/// <reference types="mongoose" />
import * as mongoose from 'mongoose';
export declare const OrganizationEventSchema: mongoose.Schema;
export interface IOrganizationEvent {
    organization: mongoose.Types.ObjectId;
    event: mongoose.Types.ObjectId;
}
export interface IOrganizationEventDocument extends IOrganizationEvent, mongoose.Document {
}
export declare const OrganizationEvent: mongoose.Model<IOrganizationEventDocument>;
