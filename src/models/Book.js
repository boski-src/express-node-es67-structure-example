import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let BookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Book', BookSchema);
