import React from 'react';
import './ProfilePage.css'; // We'll create this CSS file next

// You can replace this with actual data fetched from an API or passed via props
const userData = {
  name: 'Alex Doe',
  username: 'alex_doe',
  avatarUrl: 'https://via.placeholder.com/150/0000FF/808080?Text=User+Avatar', // Replace with a real image URL or import
  bio: 'Frontend Developer | React Enthusiast | Coffee Lover ☕ | Lifelong Learner ✨. Turning ideas into reality with code.',
  location: 'San Francisco, CA',
  email: 'alex.doe@example.com',
  website: 'https://alexdoe.dev', // Make sure it starts with http:// or https://
  skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Git', 'UI/UX Design'],
  social: {
    twitter: 'https://twitter.com/alex_doe_dev', // Use real links
    linkedin: 'https://linkedin.com/in/alexdoe',
    github: 'https://github.com/alexdoe',
  },
  stats: {
    posts: 120,
    followers: 1530,
    following: 350,
  },
};

const ProfilePage = () => {
  return (
    <div className="profile-container">
      {/* --- Profile Header --- */}
      <header className="profile-header">
        <img
          src={userData.avatarUrl}
          alt={`${userData.name}'s avatar`}
          className="profile-avatar"
        />
        <h1 className="profile-name">{userData.name}</h1>
        <p className="profile-username">@{userData.username}</p>
        <p className="profile-bio">{userData.bio}</p>

        {/* --- Optional Stats --- */}
        <div className="profile-stats">
          <div><strong>{userData.stats.posts}</strong> Posts</div>
          <div><strong>{userData.stats.followers}</strong> Followers</div>
          <div><strong>{userData.stats.following}</strong> Following</div>
        </div>

         {/* --- Social Links --- */}
        <div className="profile-social-links">
            {userData.social.twitter && <a href={userData.social.twitter} target="_blank" rel="noopener noreferrer" title="Twitter">T</a>}
            {userData.social.linkedin && <a href={userData.social.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>}
            {userData.social.github && <a href={userData.social.github} target="_blank" rel="noopener noreferrer" title="GitHub">G</a>}
            {/* Add more social links - consider using icons here! */}
        </div>
      </header>

      {/* --- Profile Body --- */}
      <main className="profile-body">
        {/* --- Details Section --- */}
        <section className="profile-section profile-details">
          <h2>Details</h2>
          <ul>
            {userData.location && <li>📍 Location: {userData.location}</li>}
            {userData.email && <li>📧 Email: <a href={`mailto:${userData.email}`}>{userData.email}</a></li>}
            {userData.website && <li>🌐 Website: <a href={userData.website} target="_blank" rel="noopener noreferrer">{userData.website}</a></li>}
          </ul>
        </section>

        {/* --- Skills Section --- */}
        <section className="profile-section profile-skills">
          <h2>Skills</h2>
          <div className="skills-list">
            {userData.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

         {/* --- Add more sections as needed (e.g., Projects, Experience) --- */}

      </main>

      {/* --- Profile Actions --- */}
      <footer className="profile-actions">
          <button className="btn btn-primary">Follow</button>
          <button className="btn">Message</button>
          <button className="btn btn-edit">Edit Profile</button>
      </footer>
    </div>
  );
};

export default ProfilePage;