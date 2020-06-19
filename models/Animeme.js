const mongoose=require('mongoose');

const animemeSchema=new mongoose.Schema({
    uploader: {
        type: String,
        required: true 
    },
    title:   {
        type: String,
        required: true
    },
    date:   {
        type: Date,
        required: true,
        default: Date.now
    },
    path:   {
        type: String,
        required: true
    }
});

const Animeme=mongoose.model('Animeme',animemeSchema);
module.exports=Animeme;