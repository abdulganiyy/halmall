import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: String,
    description: String,
    images: [String],
    category: {
      ref: "Category",
      type: mongoose.Schema.Types.ObjectId,
    },
    price: Number,
    stock: Number,
    seller: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
