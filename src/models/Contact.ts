import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  email: string;
  phone: string;
  address: string;
  github: string;
}

// Delete the existing cached model if it exists (important for Next.js hot reload issues)
delete mongoose.models.Contact;

const ContactSchema = new Schema<IContact>({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  github: { type: String, required: true },
});

// Export the model using the cleared name
export default mongoose.model<IContact>("Contact", ContactSchema);
