import React from "react";
import mypic_626 from "../../assets/images/jeffrey-spain-626w.jpg";
import mypic_775 from "../../assets/images/jeffrey-spain-775w.jpg";

function About() {
  return (
    <div className="card preview-post mb-3">
      <picture>
        <source srcset={mypic_775} media="(min-width: 991.98px)" />
        <img src={mypic_626} className="card-img-top" />
      </picture>
      <div className="card-body">
        <a className="card-title primary" href="#">
          Hello There!
        </a>
        <p className="card-text">
          What do people normally say in an about section anyways... I guess I
          should start by introducing myself!
        </p>
        <p className="card-text">
          My name is Jeffrey and I am a current student at the University of
          Wisconsin Madison pursuing his undergrad in Math in Computer Science.
          Right now I am still trying to figure out what I want to do. Coding is
          fun to me and is the focus of this blog. My other hobbies include:
          playing guitar/piano, watching anime, and excercising.
        </p>
        <p className="card-text">
          To be perfectly honest, it has always been difficult to motivate
          myself to learn and create. That's why I created this blog. Whenever I
          code something cool or learn something new I will make sure to post it
          here!
        </p>
        <p className="card-text">
          Anyways I hope that what I post is at least somewhat interesting or
          useful, and I also hope you have a great day!
        </p>
      </div>
    </div>
  );
}

export default About;
