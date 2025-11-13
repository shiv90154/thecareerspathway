import mongoose from "mongoose";

const EbookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, default: "CPS Team" },
    image: { type: String },
    link: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Ebook || mongoose.model("Ebook", EbookSchema);
