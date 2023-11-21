import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <div className="font-medium sm:text-xl text-center">{text}</div>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Seongbae</span> 👋
      <br />A frontend developer
    </h1>
  ),
  2: (
    <InfoBox
      text={<div>Experienced using react as a frontend developer in Korea</div>}
      link="/about"
      btnText="learn more"
    />
  ),
  3: (
    <InfoBox
      text={
        <div>
          Multiple projects are done for improving skills
          <br /> Curious about the projects?
        </div>
      }
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text={
        <div>
          Need a project done or looking a dev?
          <br /> I'm just a few keystrokes away
        </div>
      }
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;
