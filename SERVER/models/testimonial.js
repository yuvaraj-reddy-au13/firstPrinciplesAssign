const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const testimonialSchema = mongoose.Schema({

    imageUrl : {
        type : String,
        required : true
    },
        

    userName : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : [true, "Enter Description"]
    },


    createdAt: {
        type: Date,
        default: Date.now
    }
})


const Testimonial = mongoose.model('Testimonial', testimonialSchema )


module.exports = Testimonial;