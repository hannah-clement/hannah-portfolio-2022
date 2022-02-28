import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./../styles/components/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <a href="https://github.com/hannah-clement" className="Github">
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/hannah-clement-781144104/"
        className="LinkedIn"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}

export default Footer;
