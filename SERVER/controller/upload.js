const express = require('express');
const router = express.Router()

const Testimonial = require('../models/testimonial')


router.post('/', (req, res) => {
    const testimonial = new Testimonial({
        image : req.body.image,
        userName : req.body.userName,
        description : req.body.description
    })
    testimonial.save().then(result => console.log(result)).catch(err => res.status(500).json({error : err}))
})


module.exports = router;