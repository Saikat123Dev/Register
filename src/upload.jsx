import { useState } from "react";
import axios from "axios";
import Input from "./components/Input";
import Button from "./components/Button";

export default function Component() {
  const [studentFullname, setStudentFullname] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [studentUsername, setStudentUsername] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [studentInst, setStudentInst] = useState("");
  const [studentError, setStudentError] = useState("");

  const [teacherFullname, setTeacherFullname] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [teacherUsername, setTeacherUsername] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const [teacherInst, setTeacherInst] = useState("");
  const [teacherError, setTeacherError] = useState("");

  const createStudent = async (event) => {
    event.preventDefault();
    setStudentError("");
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/students/register`,
        {
          fullName: studentFullname,
          email: studentEmail,
          studentId: studentId,
          username: studentUsername,
          password: studentPassword,
          instituteName: studentInst,
        }
      );
      console.log("Student registration successful", response.data);
    } catch (error) {
      console.error("Student registration error: ", error);
      setStudentError("Failed to register student. Please try again.");
    }
  };

  const createTeacher = async (event) => {
    event.preventDefault();
    setTeacherError("");
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/teachers/register`,
        {
          fullName: teacherFullname,
          email: teacherEmail,
          teacherId: teacherId,
          username: teacherUsername,
          password: teacherPassword,
          instituteName: teacherInst,
        }
      );
      console.log("Teacher registration successful", response.data);
    } catch (error) {
      console.error("Teacher registration error: ", error);
      setTeacherError("Failed to register teacher. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Student Sign Up</h2>
            {studentError && <p className="text-red-500 text-center">{studentError}</p>}
            <form onSubmit={createStudent} className="space-y-4">
              <Input
                label="Name"
                id="student-name"
                placeholder="Enter your name"
                value={studentFullname}
                onChange={(e) => setStudentFullname(e.target.value)}
                required
              />
              <Input
                label="Email"
                id="student-email"
                placeholder="Enter your email"
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                required
                type="email"
              />
              <Input
                label="Enrollment-Id"
                id="student-id"
                placeholder="Enter your Enrollment ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                required
              />
              <Input
                label="UserName"
                placeholder="Enter your Unique UserName"
                value={studentUsername}
                onChange={(e) => setStudentUsername(e.target.value)}
                required
              />
              <Input
                label="Password"
                placeholder="Create a Strong Password"
                value={studentPassword}
                onChange={(e) => setStudentPassword(e.target.value)}
                required
                type="password"
              />
              <Input
                label="Institute Name"
                placeholder="Enter your Institute's Name"
                value={studentInst}
                onChange={(e) => setStudentInst(e.target.value)}
                required
              />
              <div className="flex justify-center">
                <Button type="submit" info="students" className="btn-dark">Create Account</Button>
              </div>
            </form>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Teacher Sign Up</h2>
            {teacherError && <p className="text-red-500 text-center">{teacherError}</p>}
            <form onSubmit={createTeacher} className="space-y-4">
              <Input
                label="Name"
                id="teacher-name"
                placeholder="Enter your name"
                value={teacherFullname}
                onChange={(e) => setTeacherFullname(e.target.value)}
                required
              />
              <Input
                label="Email"
                id="teacher-email"
                placeholder="Enter your email"
                value={teacherEmail}
                onChange={(e) => setTeacherEmail(e.target.value)}
                required
                type="email"
              />
              <Input
                label="Employee-Id"
                id="teacher-id"
                placeholder="Enter your Employee ID"
                value={teacherId}
                onChange={(e) => setTeacherId(e.target.value)}
                required
              />
              <Input
                label="UserName"
                placeholder="Enter your Unique UserName"
                value={teacherUsername}
                onChange={(e) => setTeacherUsername(e.target.value)}
                required
              />
              <Input
                label="Password"
                placeholder="Create a Strong Password"
                value={teacherPassword}
                onChange={(e) => setTeacherPassword(e.target.value)}
                required
                type="password"
              />
              <Input
                label="Institute Name"
                placeholder="Enter your Institute's Name"
                value={teacherInst}
                onChange={(e) => setTeacherInst(e.target.value)}
                required
              />
              <div className="flex justify-center">
                <Button type="submit" info="teachers" className="btn-dark">Create Account</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
