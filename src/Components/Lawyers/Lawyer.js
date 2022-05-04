import React from "react";
import "./Lawyer.css";

function Lawyer() {
  return (
    <div className="container">
      <div class="card-container">
        <span class="pro">PRO</span>
        <img
          class="round"
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="user"
        />
        <h3 className="title">Ricky Park</h3>
        <h6 className='city'>New York</h6>
       <p className="text-body">
          User interface designer and <br /> front-end developer
        </p>
        <div className="buttons">
          <button className="btn primary">Message</button>
          <button className="btn primary ghost">Following</button>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </div>
      </div>

      <footer>
       <p className="text-body">
          Created with <i class="fa fa-heart"></i> by
          <a target="_blank" href="https://florin-pop.com">
            Florin Pop
          </a>
          - Read how I created this
          <a
            target="_blank"
            href="https://florin-pop.com/blog/2019/04/profile-card-design"
          >
            here
          </a>
          - Design made by
          <a
            target="_blank"
            href="https://dribbble.com/shots/6276930-Profile-Card-UI-Design"
          >
            Ildiesign
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Lawyer;
