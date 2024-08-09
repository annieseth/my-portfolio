// src/pages/Project2.js
import React from 'react';
import '../styles/Projects.css';


function Project2() {
    return (
        <div>
            <h2>Project 2: Another App</h2>
            <p>This project showcases another application.</p>
            <iframe
                src="https://your-second-expo-app-url.vercel.app/"
                width="375"
                height="667"
                frameBorder="0"
                title="Second Expo App Simulator"
                style={{ border: '1px solid #ddd', borderRadius: '10px' }}
            ></iframe>
            <br />
            <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
    );
}

export default Project2;
