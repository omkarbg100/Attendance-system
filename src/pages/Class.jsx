import React from 'react'
import ClassData from '../data/ClassData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import background from "../assets/background.jpg";


const Class = () => {
  const [students, setStudents] = useState(ClassData);

  const toggleAttendance = (id) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updated);
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    const presentStudents = students.filter((s) => s.present);
    console.log("Present Students:", presentStudents);
    alert(`✅ ${presentStudents.length} Present out of ${students.length}`);
    navigate('/home');
  };

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto" >
        <h2 className="text-2xl font-bold text-center mb-4">Class Attendance</h2>

        <div className="">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Roll No</th>
                <th className="py-3 px-4 text-center">Attendance</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition-all"
                >
                  <td className="py-3 px-4 font-medium">{student.name}</td>
                  <td className="py-3 px-4 text-gray-600">{student.roll_no}</td>
                  <td className="py-3 px-4 text-center">
                    <label className="inline-flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={student.present}
                        onChange={() => toggleAttendance(student.id)}
                        className="form-checkbox h-5 w-5 text-green-600"
                      />
                      <span
                        className={`text-sm font-semibold ${student.present ? 'text-green-600' : 'text-red-500'
                          }`}
                      >
                        {student.present ? 'Present' : 'Absent'}
                      </span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        <div className="text-center mt-6">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all"
          >
            Submit Attendance
          </button>
        </div>
      </div>
    </div>
  );
};



export default Class;