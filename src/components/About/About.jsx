import { aboutConfig } from "@/config/config";
import { aboutConfigIcons } from "@/config/config";
import "./about.css";
import { useState } from "react";

const About = () => {
  const [hover, setHover] = useState(null);
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="content">
        {aboutConfig.map((item) => (
          <p className="description" key={item.id}>
            {item.description}
          </p>
        ))}
      </div>

      <div className="skill-icons">
        {aboutConfigIcons.map((icon) => (
          <i
            className={`${
              hover === icon.id
                ? icon.srcColor === ""
                  ? icon.src
                  : icon.srcColor
                : icon.src
            } icon`}
            key={icon.id}
            title={`Icon: ${icon.name}`}
            onMouseEnter={() => setHover(icon.id)}
            onMouseLeave={() => setHover(null)}
          ></i>
        ))}
      </div>
    </div>
  );
};

export default About;
