const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
    },
    email: {
      type: String,
    },
    rollno: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "students",
  }
);

module.exports = mongoose.model("Student", studentSchema);
