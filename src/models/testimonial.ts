import  { Schema, models, model } from "mongoose";

const testimonialSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    // ✅ Removed "position" field
  },
  { timestamps: true }
);

const Testimonial = models.Testimonial || model("Testimonial", testimonialSchema);
export default Testimonial;
