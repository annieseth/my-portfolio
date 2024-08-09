// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import aseth_headshot from '../images/aseth_headshot.jpg'

function Home() {
    return (
        <div class='centered-item'>
            <img src={aseth_headshot} alt="Headshot" className="profile-photo" />
            <h1 class="centered-item">Welcome to my <span class="emphasis">portfolio</span>!</h1>
            <h3 class="centered-item">Here you will not only get a strong understanding about my <span class="emphasis">technical experience</span>, but also understand me on a more <span class="emphasis">personal note.</span></h3>
                <h4><Link to="/project1">Project 1</Link></h4>
                <h4><Link to="/project2">Project 2</Link></h4>
        </div>
    );
}

export default Home;
