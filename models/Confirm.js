const { Schema, model } = require("mongoose");

const confirmSchema = Schema({
  inv: {
    type: Number,
    required: [true, "Inv is required"],
    unique: true,
  },
  guests: {
    type: String,
    required: [true, "Guests is required"],
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
