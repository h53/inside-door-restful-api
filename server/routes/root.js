const express = require('express');

const router = express.Router();

router.get('/*',async (req,res)=>{
    res.send("GET https://insidedoor.herokuapp.com/api/version/month/day \n e.g. https://insidedoor.herokuapp.com/api/v1/1/23 \n find document in https://github.com/h53/inside-door-restful-api");
    return;
});

module.exports = router;