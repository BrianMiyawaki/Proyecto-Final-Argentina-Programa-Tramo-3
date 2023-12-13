import { Schema,SchemaType,model, } from "mongoose";

const taskSchema = new Schema ({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }


},
{
    timestamps:true,
    versionKey:false
})

export default model ("Task", taskSchema)
    