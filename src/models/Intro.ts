    import mongoose, { Schema, Document } from "mongoose";

    export interface IIntro extends Document {
    welcomeText: string;
    firstName: string;
    lastName: string;
    caption: string;
    description: string;
    }

    const IntroSchema = new Schema({
    welcomeText: String,
    firstName: String,
    lastName: String,
    caption: String,
    description: String
    });

    export default mongoose.models.Intro || mongoose.model<IIntro>("Intro", IntroSchema);
