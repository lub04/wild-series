const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const programRouter = require("./programs/router");
const categoryRouter = require("./categories/router");

router.use("/items", itemsRouter);
router.use("/programs", programRouter);
router.use("/categories", categoryRouter);
/* ************************************************************************* */

module.exports = router;
