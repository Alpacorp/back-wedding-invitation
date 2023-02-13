const { response } = require("express");
const Confirm = require("../models/Confirm");

const getConfirms = async (req, res = response) => {
  const inv = req.query.inv;
  const confirmId = await Confirm.find({ inv: inv });

  if (inv) {
    try {
      if (confirmId.length === 0) {
        return res.status(404).json({
          ok: false,
          msg: "No confirm found with that inv",
        });
      }
      res.json({
        ok: true,
        confirmId,
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        ok: false,
        msg: error,
      });
    }
  } else {
    const confirms = await Confirm.find();
    res.json({
      ok: true,
      confirms,
    });
  }
};

const createConfirm = async (req, res = response) => {
  const { inv, name, quantity } = req.body;
  const confirm = new Confirm(req.body);
  await confirm.save();
  res.json({
    ok: true,
    confirm,
  });
};

module.exports = {
  getConfirms,
  createConfirm,
};
