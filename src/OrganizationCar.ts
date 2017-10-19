import * as mongoose from 'mongoose';

export const OrganizationCarSchema = new mongoose.Schema({
    organization: {
        type: mongoose.Types.ObjectId,
        ref: 'Organization',
        required: true,
    },
    car: {
        type: mongoose.Types.ObjectId,
        ref: 'Car',
        required: true
    }
});

export interface IOrganizationCar {
    organization: mongoose.Types.ObjectId;
    car: mongoose.Types.ObjectId;
}

export interface IOrganizationCarDocument extends IOrganizationCar, mongoose.Document {

}

export const OrganizationCar = mongoose.model<IOrganizationCarDocument>('OrganizationCar', OrganizationCarSchema);
