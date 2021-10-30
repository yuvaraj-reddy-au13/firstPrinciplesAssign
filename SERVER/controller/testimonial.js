// const express = require('express');
// const router = express.Router()

// const cloudinary = require('cloudinary')

// const Testimonial = require('../models/testimonial');


// const catchAsyncErrors  = func => (req, res, next) =>
//     Promise.resolve(func(req, res, next))
//         .catch(next)


// router.post('/', (req, res) => {

//     let images = []
//     if (typeof req.body.images === 'string') {
//         images.push(req.body.images)
//     } else {
//         images = req.body.images
//     }

//     let imagesLinks = [];

//     for (let i = 0; i < images.length; i++) {
//         const result = cloudinary.v2.uploader.upload(images[i], {
//             folder: 'testimonial'
//         });

//         imagesLinks.push({
//             // public_id: result.public_id,
//             url: result.secure_url
//         })
//     }

//     req.body.images = imagesLinks
//     req.body.user = req.user.id;

//     const createTestimonial = Testimonial.create(req.body);
//     console.log(createTestimonial)

//     res.status(201).json({
//         success: true,
//         createTestimonial
//     })
// })

// module.export = router;
