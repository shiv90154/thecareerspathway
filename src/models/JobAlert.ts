import mongoose from "mongoose";

const JobAlertSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.JobAlert ||
  mongoose.model("JobAlert", JobAlertSchema);
