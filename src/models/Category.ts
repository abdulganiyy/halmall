import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: String,
  },
  {
    toJSON: { virtuals: true },
    timestamps: true,
  }
);

categorySchema.virtual("products", {
  ref: "Product",
  localField: "_id",
  foreignField: "category",
});

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
export default Category;
