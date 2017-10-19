import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

export interface ICar {
    name?: string;
}

export interface ICarDocument extends ICar, mongoose.Document {

}

export const Car = mongoose.model<ICarDocument>('Car', CarSchema);
