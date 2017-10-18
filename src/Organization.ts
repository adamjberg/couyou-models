import * as mongoose from 'mongoose';

export const OrganizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

export interface IOrganization {
    name?: string;
}

export interface IOrganizationDocument extends IOrganization, mongoose.Document {

}

export const Organization = mongoose.model<IOrganizationDocument>('Organization', OrganizationSchema);
