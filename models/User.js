const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true 
    },
    password:   {
        type: String,
        required: true
    },
    date:   {
        type: Date,
        default: Date.now
    },
    anime_mal_id: {
        type: [Number]
    }
});

const User=mongoose.model('User',userSchema);
module.exports=User;