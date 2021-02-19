import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    //   jeder user hat einzigartige Contacts!
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Name bitte!"],
    },
    email: {
      type: String,
      required: [true, "Email bitte"],
    },
    phone: {
      type: String,
    },
    type: {
      type: String,
      enum: ["privat", "geschäftlich"],
      default: "privat",
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
