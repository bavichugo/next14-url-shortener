import mongoose, { Schema, Document } from "mongoose";

export interface IUrlRecord extends Document {
  long_url: string;
  short_url: string;
  userId: string;
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
    userId: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const UrlRecord = mongoose.models.UrlRecord ?? mongoose.model<IUrlRecord>("UrlRecord", urlRecordSchema);

export default UrlRecord;
