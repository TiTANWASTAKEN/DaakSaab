const ensureAuthenticated = require('../Middleware/Auth');

const router = require('express').Router();


router.get('/',  ensureAuthenticated, (req,res)=>{
    res.status(200).json(
        {
            message: "home screen haiga"
        }
    )
});

module.exports = router;