/**
 * Created by javader on 17-8-21.
 */
var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    console.log("orders")
})
module.exports = router;