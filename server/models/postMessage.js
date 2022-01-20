import mongoose, { Model }  from "mongoose";

const postSchema = mongoose.Schema({
      title = String,
      message = String,
      creator = String,
      tags = [String],
      selectedFile = String,
      likeCount = {
            type:Number,
            default:0
      },
      createdAt = {
            type: Date,
            default : new Date()
      },

})

const PostMessage = new Model('PostMessage',postSchema);

export default PostMessage