const { Schema, model } = require("mongoose");

const confirmSchema = Schema({
  inv: {
    type: String,
    required: [true, "ID is required"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Confirm", confirmSchema);
