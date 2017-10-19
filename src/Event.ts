import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    }
});

export interface IEvent {
    name?: string;
    start?: Date;
    end?: Date;
}

export interface IEventDocument extends IEvent, mongoose.Document {

}

export const Event = mongoose.model<IEventDocument>('Event', EventSchema);
