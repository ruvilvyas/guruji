// models/testimonial.ts
import mongoose, { Schema, models } from "mongoose";

const testimonialSchema = new Schema({
  name: String,
  company: String,
  review: String,
});

const Testimonial = models.Testimonial || mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;
