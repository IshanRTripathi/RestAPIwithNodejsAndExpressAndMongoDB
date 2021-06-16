const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("gets is called !");
});

module.exports = router;