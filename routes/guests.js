/*
  Form routes
  host + /api/guests
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { getGuests } = require("../controllers/guests");

const router = Router();

router.get("/", getGuests);

module.exports = router;
