import { useContext } from "react";
import "./about.scss";
import { ThemeContext } from "../../App";
import AnimatedText from "../animatedText/AnimatedText";

interface AboutMeProps {}

const AboutMe: React.FunctionComponent<AboutMeProps> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "abtMewrapperDark" : "abtMewrapper"}>
      <div className="abtCont">
        <img
          src="https://res.cloudinary.com/daysgbjom/image/upload/v1706636857/Frame_l8vcja.png"
          alt="Ransford Yeboah"
        />
        <div className="details">
          <AnimatedText
            text="Meet Ransford Yeboah."
            className={theme.isDarkmode ? "meetDark" : "meet"}
            once
          />
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            I am a Frontend Developer and a Graphic designer with a three years of professional experience
            based in Accra, Ghana. I have a serious passion for UI effects and
            animations, building pixel perfect mobile and web applications, creating
            dynamic user experiences and making every element on the web
            accessible to everyone including those with disabilities.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            Over the past years I have worked in the food industry, the health
            sector and the packaging industry. My experience working in these
            various sectors has helped increase my knowledge in building
            accessible and user friendly web and mobile applications using tools like
            React,Flutter, Typescript and Electron for mobile and desktop apps.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            When i'm off my computer you might find me playing soccer, watching
            movies, bowling, spending time with friends and family and other
            activities that helps me unwind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
