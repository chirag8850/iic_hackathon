import React from "react";

function About() {
  return (
    <div className="about-area">
      <div className="container">
        <div className="row">
          <div className="row-items">
            <div class="heading-part about-heading">
              <h4>About Us</h4>
              <p>
                "Healthy Sahayak" is a versatile digital platform designed to
                address the demands of contemporary life while prioritizing
                well-being. It offers personalized dietary guidance, facilitates
                connections with fitness and mental health professionals, and
                provides easy access to medical records.
                <br />
                <br />
                The platform encourages regular exercise and yoga by offering
                tailored workout plans and progress tracking. Additionally, it
                delivers insightful content that educates users about the
                benefits of a healthy lifestyle.
                <br />
                <br />
                In essence, Healthy Sahayak combines technology and education to
                empower individuals to take control of their physical and mental
                health. By providing personalized support and valuable
                resources, it aims to reduce the risk of health issues and
                promote overall well-being in today's fast-paced world.
                <br />
                <br />
                This all-in-one solution motivates users to engage in regular
                exercise and yoga through customized workout plans and progress
                tracking. It also educates users on the benefits of a healthy
                lifestyle through engaging content.
                <br />
                <br />
              </p>
            </div>
            <div className="row-items">
              <div className="about-image">
                <img src="../about-section.jpg" alt="About Section" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
