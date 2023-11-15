import React from "react";
import image1 from '../../assets/mind-plan.png';
import '../../styles/home.css';
import { styled, Box, Typography } from '@mui/material';
import background from '../../assets/home-mental.jpg';


const Image = styled(Box)`
    width: 100%;
    background: url(${background}) center/82%;
    height: 60vh;
    display: flex;
    flex-direction: column;
   
    justify-content: center;
`;





const Home = () => {
  return (
    <div className="home">
      <main>
        <Image>
        <section className="mental-health-intro">
          <h1 className="mental-health-intro-title">
            Every Mind Matters</h1>

          <article>
            <h2>What is mental health?</h2>
            <p>
              Having good mental health helps us relax more, achieve more and enjoy our lives more. 
              There are simple things we can all do to look after our mental health and wellbeing – 
              take our quiz to get started today with a free plan, expert advice and practical tips.
            </p>
          </article>
        </section>
        </Image>
        <section className="mind-plan">
          <h2>Do something now...</h2>
          <div className="mind-plan-content">
            <div className="mind-plan-info">
              <h3>Get Your Mind Plan</h3>
              <p>
                Take our quiz to get your free plan, designed to help you feel more in control, 
                deal with stress and anxiety, boost your mood and improve your sleep.
              </p>
              <button onClick={() => {/* handle click event to take the quiz */}}>
                Take the quiz
              </button>
            </div>
            <div className="mind-plan-image">
                <img src={image1} alt="Mind Plan" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
