import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },

    createdAt: {
        type: Date,
        default: new Date()
    }
});

// The Schema now has to be turned into a model

const PostMessage = mongoose.model('PostMessage', postSchema);


export default PostMessage;