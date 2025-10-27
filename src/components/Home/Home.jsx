import { homeConfig } from "@/config/config";
import "./home.css";
import { Linkedin, Github, Download, ChevronRight } from "lucide-react";
import React from "react";

const icons = {
  Linkedin,
  Github,
};

const Home = ({ scrollToSection, contact }) => {
  const handleLinkClick = (url) => () => {
    window.open(url, "_blank");
  };

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    scrollToSection(contact);
  };

  return (
    <div className="home">
      <img
        className="profile_pic"
        src={homeConfig?.profile_pic}
        alt={homeConfig?.name}
      />

      <div className="job_status">
        <span></span>
        {homeConfig.status}
      </div>

      {/* user information */}
      <div className="user_info">
        <h1 className="intro">
          Hi I'm <span>{homeConfig?.name}</span> - {homeConfig?.title}
        </h1>
        <p className="home_description">{homeConfig?.description}</p>
      </div>

      {/* social links */}
      <div className="social_links">
        {/* download Resume */}

        <button className="get-touch" onClick={handleSmoothScroll}>
          <a href="#contact" onClick={(e) => e.preventDefault()}>
            Get in touch <ChevronRight />
          </a>
        </button>

        <button className="download_resume">
          <a href={homeConfig?.resume} download>
            Download CV
            <Download className="download-icon" />
          </a>
        </button>

        {/* social icons */}
        <div className="icons">
          {homeConfig?.links?.map((link) => {
            const IconComponent = icons[link.socialIcon];
            return (
              <button
                className="icon_button"
                key={link.id}
                onClick={handleLinkClick(link.socialLink)}
              >
                <IconComponent className="icons" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
