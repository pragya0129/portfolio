import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <img
          src="/smiling-3d-cartoon-man_975163-772.jpg"
          alt="Profile"
          className="profile-pic"
        />
        <div>
          <h1 className="name">Pragya Gaur</h1>
          <p className="title">Full Stack Developer | React | JavaScript</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate developer with experience in building web
          applications using React, Node.js, and more.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          {[
            "React",
            "JavaScript",
            "Node.js",
            "MongoDB",
            "CSS",
            "Express.js",
            "Python",
            "C++",
          ].map((skill) => (
            <span key={skill} className="skill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {[
            {
              title: "CelebrateMate",
              desc: "Event reminder app using MERN stack",
            },
            {
              title: "MassMailer",
              desc: "Bulk email sender using React and Node.js",
            },
          ].map((project) => (
            <div key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
