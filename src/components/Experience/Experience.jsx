import { experienceConfig } from "@/config/config";
import "./experience.css";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <div className="experience">
      <h2>My Experience</h2>
      <p>Professional experience that I have accumulated over the years.</p>

      <div className="experience-list">
        {experienceConfig?.map((exp) => (
          <div className="experience-item" key={exp.id}>
            <h3>
              <span className="organization">
                <Building2 />
                {exp.organization}
              </span>
            </h3>
            <h4>{exp.role_specific}</h4>
            <p>{exp.role === "" ? "" : exp.role}</p>
            <span className="duration">
              <span>
                <Calendar /> {exp.start_month} {exp.start_year}
              </span>
              {" - "}
              <span>
                {exp.end_month === ""
                  ? "Present"
                  : `${exp.end_month} ${exp.end_year}`}
              </span>
            </span>
            <p className="desc">{exp.details}</p>
            {exp.skills && (
              <div className="skills">
                {exp.skills.map((skill, index) => (
                  <span key={index} className="skill">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
