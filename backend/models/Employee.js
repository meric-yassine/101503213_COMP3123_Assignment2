import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: String,
    position: String,
    salary: Number,
    date_of_joining: Date,
    department: String
  },
  { timestamps: true }
);

export default mongoose.model("Employee", EmployeeSchema);
