import { useContext } from "react";
import {
  GmailDarkIcon,
  GmailIcon,
  LinkedInContactIcon,
  TwitterContactIcon,
} from "../../assets/icons/icons";
import ContactCard from "./ContactCard";
import "./contact.scss";
import { ThemeContext } from "../../App";

interface MeansOfContactProps {}

const MeansOfContact: React.FunctionComponent<MeansOfContactProps> = () => {
  const theme = useContext(ThemeContext);

  const contacts = [
    {
      icon: theme.isDarkmode ? <GmailDarkIcon /> : <GmailIcon />,
      appText: "Send me an email",
      appDetails: (
        <a href="mailto:developerpalma7@gmail.com" aria-label="send Ransford a mail">
          developerpalma7@gmail.com
        </a>
      ),
    },
    {
      icon: <TwitterContactIcon />,
      appText: "Follow me on Twitter",
      appDetails: (
        <a
          href="https://x.com/DD_Palma?t=mZN60zeAATqHlLvpvZjRxw&s=09"
          target="_blank"
          rel="noreferrer"
          aria-label="follow DD_Palma on twitter"
        >
          @DD_Palma
        </a>
      ),
    },
    {
      icon: <LinkedInContactIcon />,
      appText: "Connect with me on LinkedIn",
      appDetails: (
        <a
          href="https://www.linkedin.com/in/%F0%9F%91%A8%E2%80%8D%F0%9F%92%BBransford-yeboah-b96994297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
          aria-label="connect with Ransford on Linkedin"
        >
          Ransford Yeboah
        </a>
      ),
    },
  ];
  return (
    <div className={theme.isDarkmode ? "flexMeansDark" : "flexMeans"}>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.appText}
          icon={contact.icon}
          appName={contact.appText}
          details={contact.appDetails}
        />
      ))}
    </div>
  );
};

export default MeansOfContact;
