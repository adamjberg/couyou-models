import * as mongoose from 'mongoose';

export const OrganizationEventSchema = new mongoose.Schema({
    organization: {
        type: mongoose.Types.ObjectId,
        ref: 'Organization',
        required: true,
    },
    event: {
        type: mongoose.Types.ObjectId,
        ref: 'Event',
        required: true
    }
});

export interface IOrganizationEvent {
    organization: mongoose.Types.ObjectId;
    event: mongoose.Types.ObjectId;
}

export interface IOrganizationEventDocument extends IOrganizationEvent, mongoose.Document {

}

export const OrganizationEvent = mongoose.model<IOrganizationEventDocument>('OrganizationEvent', OrganizationEventSchema);
