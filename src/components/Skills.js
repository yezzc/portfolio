import React from 'react';
import './Skills.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCuttlefish,
  FaCode
} from 'react-icons/fa';
import { SiCplusplus, SiMongodb } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        <FaHtml5 title="HTML5" />
        <FaCss3Alt title="CSS3" />
        <FaJs title="JavaScript" />
        <FaPython title="Python" />
        <FaReact title="React.js" />
        <FaNodeJs title="Node.js" />
        <SiMongodb title="MongoDB" />
        <FaCode title="MATLAB" />
        <FaGitAlt title="Git" />
        <FaCuttlefish title="C" />
        <SiCplusplus title="C++" />
      </div>
    </section>
  );
};

export default Skills;
