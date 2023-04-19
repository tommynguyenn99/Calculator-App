import { getYear } from './/utilities/dates';

function Footer({ copyright, creator }) {
    return (
        <footer>
            <p>&copy; { copyright } {creator}</p>
        </footer>
    );
}

Footer.defaultProps = {
    copyright: getYear()
}

export default Footer;
