import { getYear } from "../utilities/dates";

function Footer({ copyright = getYear(), creator }) {
  return (
    <footer>
      <p>
        &copy; {copyright} {creator}
      </p>
    </footer>
  );
}

export default Footer;
