import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    firstName: String,
    gender: String,
    lastName: String,
    dob: String,
    phoneNumber: String,
    role: {
      type: String,
      default: "user",
      enum: ["admin", "seller", "user"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
