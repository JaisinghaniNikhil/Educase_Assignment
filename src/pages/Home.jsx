import React from 'react';
import '../cssfiles/home.css';
import profileImg from '../assets/krishn.jpg'; // Replace with your actual path

function Home() {
  return (
    <div className="settings-container">
      <h3 className="settings-heading">Account Settings</h3>
      
      <div className="profile-card">
        <div className="profile-header">
          <img src={profileImg} alt="User" className="profile-img" />
          <div className="profile-info">
            <h4 className="user-name">Krishna</h4>
            <p className="user-email">krishna@gmail.com</p>
          </div>
        </div>

        <p className="user-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr. Sed Diam Nonumy Eirmod Tempor Invidunt Ut 
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}

export default Home;
