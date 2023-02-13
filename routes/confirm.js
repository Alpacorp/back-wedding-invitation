/*
  Form routes
  host + /api/confirm
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { createConfirm, getConfirms } = require("../controllers/confirm");

const router = Router();

router.post(
  "/",
  [
    check("inv", "Inv is required").not().isEmpty(),
    check("guests", "Guests is required").not().isEmpty(),
    check("quantity", "Quantity is required").not().isEmpty().isNumeric(),
  ],
  createConfirm
);

router.get("/", getConfirms);

module.exports = router;
