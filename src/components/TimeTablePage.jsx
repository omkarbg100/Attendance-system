import React from 'react'
import TeacherTimetable from '../data/TeacherTimetable';
import { useState } from 'react';
import { Link } from 'react-router';
import { useNavigate } from 'react-router-dom';


const TimeTablePage = (props) => {

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const [Class,SetClass]=useState(1);

    const navigate = useNavigate();

    const toClass=(e)=>{
        console.log(e);
        navigate('/class');
    }
    
    return (
        <div>
            <div className="bg-white text-gray-900 min-h-screen p-6 rounded">
                <div className="max-w-4xl mx-auto">
                    
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">{days[props.id]}</h2>
                    </div>

                    {/* Timetable List */}
                    <div className="space-y-4">
                        {Object.entries(TeacherTimetable[props.id]).map(([timeSlot, details]) => (
                            <div
                                key={timeSlot}
                                className={`p-4 rounded-md ${details.Break ? "bg-red-200" : "bg-green-100"} shadow-md cursor-pointer`}
                            >
                                <h3 className="text-lg font-semibold">{timeSlot.replace("_", " ")}</h3>

                                {details.Break ? (
                                    <p className="text-sm text-gray-600">Break</p>
                                ) : (
                                    <div onClick={()=>toClass(details.class_id)}>
                                        <p><strong>Subject : </strong>
                                            <span
                                                className=" cursor-pointer "
                                            >
                                                {details.Subject}
                                            </span>
                                        </p>
                                        <p><strong>Class : </strong> {details.Class}</p>
                                        <p><strong>Room : </strong> {details.Room}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeTablePage
