import '../styles/Footer.css';
import insta from '../assets/instagram-logo.png';
import codepen from '../assets/codepen-logo.png';
import gitHub from '../assets/github-logo.png';

function Footer() {
    return (
        <footer>
            <p id="rights">©2023 Nicolas Flinois. Tous droits réservés.</p>
            <div id="social">
                <p>Suivre sur les réseaux</p>
                <div>
                    <a className="socialLogo" href="https://www.instagram.com/allenavir/">
                        <img src={insta} alt="Instagram"></img>
                    </a>
                    <a className="socialLogo" href="https://codepen.io/Allenavir">
                        <img src={codepen} alt="CodePen"></img>
                    </a>
                    <a className="socialLogo" href="https://github.com/Allenavir">
                        <img src={gitHub} alt="GitHub"></img>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer