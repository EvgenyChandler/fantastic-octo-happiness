const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  EAN: Schema.Types.Mixed,
  code: { type: String },
  productName: { type: String },
  status: { type: String },
  parentProdGroupCode: { type: String },
  parentProdGroupName: { type: String },
  productGroupCode: { type: String },
  productGroupName: { type: String },
  brand: { type: String },
  weight: { type: String },
  depth: { type: String },
  width: { type: String },
  height: { type: String },
  relatedProducts: [{ type: String }],
  analog: [{ type: String }],
  image: { type: String },
  certificate: { type: String },
  certificateImage: Schema.Types.Mixed,
});

module.exports = model("Product", ProductSchema);
