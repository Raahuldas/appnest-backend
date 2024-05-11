import mongoose, {Schema} from "mongoose";

const contactSchema = new Schema(
    {
        fullname:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true
        },
        contact:{
            type:String,
            required:true
        },
        budget:{
            type:String,
            required:true
        },
        project:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

const Contact = mongoose.model("Contact",contactSchema);

export default Contact;
