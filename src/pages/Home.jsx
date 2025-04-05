import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/Navbar';
import Timetable from './Timetable';
import Class from './Class';
import background from "../assets/background.jpg";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div style={{ backgroundImage: `url(${background})` }}>
            <Timetable />
            </div>
        </div>
    );
};

export default Home;

