// src/pages/Project1.js
import React from 'react';
import '../styles/Projects.css';


function Project1() {
    return (
        <div>
            <h2>Project 1: Expo App</h2>
            <p>This project is a simple React Native app built using Expo.</p>
            <iframe
                src="https://your-expo-app-url.vercel.app/"
                width="375"
                height="667"
                frameBorder="0"
                title="Expo App Simulator"
                style={{ border: '1px solid #ddd', borderRadius: '10px' }}
            ></iframe>
            <br />
            <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    );
}

export default Project1;
