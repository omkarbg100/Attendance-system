import React, { useState } from "react";
import TeacherTimetable from "../data/TeacherTimetable";
import TimeTablePage from "../components/TimeTablePage";


const Timetable = () => {
  const today = new Date();
  const [Day, SetDay] = useState(today.getDay());

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; 
  return (
    <div className="p-6 max-w-5xl mx-auto ">
      <div className=" flex justify-between">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Teacher Timetable</h2>
        <div className='mb-8 flex items-center'>
          <select
            onChange={(e) => {
              SetDay(parseInt(e.target.value));
            } } 
            className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
            {days.map((day, index) => (
              <option key={index} value={index}>{day}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
      <TimeTablePage id={Day}/>
      </div>
    </div>
  );
};

export default Timetable;
