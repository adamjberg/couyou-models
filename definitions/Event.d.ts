/// <reference types="mongoose" />
import * as mongoose from 'mongoose';
export declare const EventSchema: mongoose.Schema;
export interface IEvent {
    name?: string;
    start?: Date;
    end?: Date;
}
export interface IEventDocument extends IEvent, mongoose.Document {
}
export declare const Event: mongoose.Model<IEventDocument>;
