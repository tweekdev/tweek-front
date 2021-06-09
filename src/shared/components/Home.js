import React from 'react';
import { config, useSpring } from 'react-spring';
import './Home.css';
import Planet from './Home/Planet';
import WordsFading from './Home/wordsFading';

const Home = () => {
  // Title animation
  const TitleSpring = useSpring({
    config: config.wobbly,
    delay: 200,
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(40px)' },
  });

  // Sub title animation
  const SubTitleSpring = useSpring({
    config: config.stiff,
    delay: 300,
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(40px)' },
  });

  return (
    <div className="main">
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 200"
      >
        <path
          fill="#070316"
          fillOpacity="0.4"
          d="M0,140 C150, 200 350, 0 500, 200 L700, 00 L0,10 Z"
        ></path>
        <path
          fill="#070316"
          fillOpacity="0.6"
          d="M0,110 C150, 200 350, 0 500, 150 L500, 00 L0,0 Z"
        ></path>
        <path
          fill="#070316"
          fillOpacity="1"
          d="M0,100 C150, 200 350, 0 500, 100 L500, 00 L0,0 Z"
        ></path>
      </svg>

      <div className="backgroundImage">
        <Planet></Planet>
      </div>
      <div className="container">
        <div className="smallWrapper">
          <h2 className="title" style={TitleSpring}>
            Hello,
            <br />
            I'm <span>Théau</span>
          </h2>
          <h2 className="subTitle" style={SubTitleSpring}>
            A<WordsFading></WordsFading>Full-stack developer
            <br /> Follow me on <span>Github</span> and <span>Instagram</span> !
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
