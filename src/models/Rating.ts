import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ratingSchema = new Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    value: Number,
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

const Rating = mongoose.models.Rating || mongoose.model("Rating", ratingSchema);
export default Rating;
