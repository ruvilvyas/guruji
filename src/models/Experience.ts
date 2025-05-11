import mongoose, { Schema, Document } from "mongoose";

export interface IExperience extends Document {
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

const ExperienceSchema: Schema = new Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: [String], default: [] },
});

export default mongoose.models.Experience ||
  mongoose.model<IExperience>("Experience", ExperienceSchema);
