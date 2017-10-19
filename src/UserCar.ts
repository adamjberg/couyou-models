import * as mongoose from 'mongoose';

export const UserCarSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    car: {
        type: mongoose.Types.ObjectId,
        ref: 'Car',
        required: true
    }
});

export interface IUserCar {
    user: mongoose.Types.ObjectId;
    car: mongoose.Types.ObjectId;
}

export interface IUserCarDocument extends IUserCar, mongoose.Document {

}

export const UserCar = mongoose.model<IUserCarDocument>('UserCar', UserCarSchema);
