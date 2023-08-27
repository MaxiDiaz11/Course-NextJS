import moongoose, { Schema, Model, model } from "mongoose";
import { IProduct } from "../interfaces";

const ProductSchema = new Schema(
  {
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    sizes: [
      {
        type: String,
        enum: {
          values: ["XS", "S", "M", "L", "XL", "XXL"],
          message: "Invalid size",
        },
      },
    ],
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    type: {
      type: String,
      enum: {
        values: ["shirts", "pants", "hoodies", "hats"],
        message: "Invalid type",
      },
    },
    gender: {
      type: String,
      enum: {
        values: ["men", "women", "kid", "unisex"],
        message: "Invalid gender",
      },
    },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

ProductSchema.index({ title: "text", tags: "text" });

const Product: Model<IProduct> =
  moongoose.models.Product || model("Product", ProductSchema);

export default Product;
