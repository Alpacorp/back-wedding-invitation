const { response } = require("express");
const Confirm = require("../models/Confirm");

const getConfirms = async (req, res = response) => {
  const inv = req.query.inv;
  const confirmId = await Confirm.findOne({ inv: inv });

  if (inv) {
    try {
      if (confirmId === null) {
        return res.status(404).json({
          ok: false,
          msg: "No confirm found with that inv",
        });
      } else {
        res.json({
          ok: true,
          msg: "Confirm inv found",
          confirmId,
        });
      }
    } catch (error) {
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
  const { inv, guests, quantity } = req.body;
  const confirm = new Confirm(req.body);
  const invExist = await Confirm.findOne({ inv });

  if (invExist) {
    return res.status(409).json({
      ok: false,
      msg: "Inv already exist",
    });
  }

  try {
    const confirmDb = await confirm.save();
    res.json({
      ok: true,
      confirm: confirmDb,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please contact the administrator",
    });
  }
};

module.exports = {
  getConfirms,
  createConfirm,
};
