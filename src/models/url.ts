import mongoose, { Schema, Document } from "mongoose";

export interface IUrlRecord extends Document {
  long_url: string;
  short_url: string;
  user: string;
}

const urlRecordSchema = new Schema(
  {
    long_url: {
      type: String,
      require: true,
    },
    short_url: {
      type: String,
      require: true,
    },
    user: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

const UrlRecord = mongoose.models.UrlRecord ?? mongoose.model<IUrlRecord>("UrlRecord", urlRecordSchema);

export default UrlRecord;
