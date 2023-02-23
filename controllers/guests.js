const { response } = require("express");
const Confirm = require("../models/Confirm");

const getGuests = async (req, res = response) => {
  const guests = await Confirm.find().sort({ date: -1 });
  res.json({
    ok: true,
    guests,
  });
};

module.exports = {
  getGuests,
};
