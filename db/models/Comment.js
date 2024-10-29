import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  __v: { type: Number, required: true },
});

const Comment =
  mongoose.models.Comment || mongoose.model("Place Comment:", commentSchema);

export default Comment;
