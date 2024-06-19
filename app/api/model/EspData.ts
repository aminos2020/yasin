// models/EspData.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IEspData extends Document {
  key: string;
  value: string;
}

const EspDataSchema: Schema<IEspData> = new Schema({
  key: { type: String, required: true },
  value: { type: String, required: true },
});

const EspData: Model<IEspData> =
  mongoose.models.EspData || mongoose.model<IEspData>("EspData", EspDataSchema);

export default EspData;
