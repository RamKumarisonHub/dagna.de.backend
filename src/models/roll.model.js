import mongoose, { Schema } from "mongoose";

const rollSchema = new Schema(
  {
    rollName: {
      type: String,
      required: [true, "Roll Name is required"],
      trim: true,
      index: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Roll = mongoose.model("Roll", rollSchema);
