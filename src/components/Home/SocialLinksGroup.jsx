import GitHubIcon from "../Ui-icons/GitHubIcon";
import InstagramIcon from "../Ui-icons/InstagramIcon";
import LinkedInIcon from "../Ui-icons/LinkedInIcon";
import StackOverflowIcon from "../Ui-icons/StackOverflowIcon";
import SocialLink from "./SocialLink";

export default function SocialLinksGroup() {
  return (
    <div className="social mt-8 flex gap-6 justify-center md:justify-start ">
      <SocialLink
        link="https://www.linkedin.com/in/mohamed-ahmed40/"
        label="LinkedIn"
        icon={<LinkedInIcon />}
        color="#0A66C2"
      />
      <SocialLink
        link="https://github.com/Mohammed-A7med/"
        label="GitHub"
        icon={<GitHubIcon />}
        color="#5f93e7"
      />
      <SocialLink
        link="https://www.instagram.com/mohammed_ahmed40?igsh=NHFxbG1kOWVncjhh"
        label="Instagram"
        icon={<InstagramIcon />}
        color="#E4405F"
      />
      <SocialLink
        link="https://stackoverflow.com/users/29678398/mohamed-ahmed"
        label="Stack Overflow"
        icon={<StackOverflowIcon />}
        color="#F48024"
      />
    </div>
  );
}
