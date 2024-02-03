import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../assets/icons/icons";
import "./socials.scss";

interface SocialsProps {}

const Socials: React.FunctionComponent<SocialsProps> = () => {
  return (
    <div className="socialswrapper">
      <a
        className="socialIcons"
        href="https://github.com/DevBaba"
        target="_blank"
        rel="noreferrer"
        aria-label="link to Devbaba github account"
      >
        <GithubIcon />
      </a>
      <a
        className="socialIcons"
        href="https://www.instagram.com/palma_kbb?igsh=MTI5anRjY3BncHl6Zg==_"
        target="_blank"
        rel="noreferrer"
        aria-label="link to my instagram account"
      >
        <InstagramIcon />
      </a>
      <a
        className="socialIcons"
        href="https://x.com/DD_Palma?t=mZN60zeAATqHlLvpvZjRxw&s=09"
        target="_blank"
        rel="noreferrer"
        aria-label="link to my twitter account"
      >
        <TwitterIcon />
      </a>
      <a
        className="socialIcons"
        href="https://www.linkedin.com/in/%F0%9F%91%A8%E2%80%8D%F0%9F%92%BBransford-yeboah-b96994297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noreferrer"
        aria-label="link to my linkedin account"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default Socials;
