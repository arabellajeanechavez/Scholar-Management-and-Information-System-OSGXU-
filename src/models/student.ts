import mongoose from "mongoose";
// TODO: change the name into lastname, firstname, middlename
const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    default: '12341234',
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  student_id: {
    type: String,
  },
  gender: {
    type: String,
  },
  university: {
    type: String,
  },
  program: {
    type: String,
  },
  college: {
    type: String,
  },
  year_level: {
    type: String,
  }
});

const Student = mongoose.models.Student || mongoose.model("Student", schema);
export default Student;

