import mongoose, { Schema, models } from "mongoose";

const StudyMaterialSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const StudyMaterial =
  models.StudyMaterial || mongoose.model("StudyMaterial", StudyMaterialSchema);

export default StudyMaterial;
