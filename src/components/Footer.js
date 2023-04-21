const defaultYear = new Date().getFullYear();

function Footer({ copyright = defaultYear, creator }) {
  return (
    <footer>
      <p>
        &copy; {copyright} {creator}
      </p>
    </footer>
  );
}

export default Footer;
