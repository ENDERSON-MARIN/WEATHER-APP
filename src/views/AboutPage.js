import React from "react";
import "./about.css";
import styles from "./AboutPage.module.css";

import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdAddBusiness } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";

function AboutPage() {
  return (
    <section id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <h3>Enderson Marín</h3>
          <h5 className={styles.stack}>Full Stack Developer</h5>
        </div>

        <div className="about__content">
          <p>
            I am a Computer Technologist with 9 approved semesters in
            engineering, I have more than 10 years of experience in the field
            both in the technical support branch, as a Full Stack Web and
            Database Developer. I am passionate about programming, baseball,
            basketball and sharing with my family.
          </p>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>10+ Years Working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>70+ Completed</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <MdAddBusiness className="about__icon" />
              <h5>Companies</h5>
              <small>30+ Worldwide</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
