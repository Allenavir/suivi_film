import '../styles/Footer.css';
function Footer() {    
    return (
        <footer>
            <p id="rights">©2023 Nicolas Flinois. Tous droits réservés.</p>
            <div id="social">
                <p>Suivre sur les réseaux</p>
                <div>
                    <a className="socialLogo" href="https://www.instagram.com/allenavir/">Instagram</a>
                    <a className="socialLogo" href="https://codepen.io/Allenavir">CodePen</a>
                    <a className="socialLogo" href="https://github.com/Allenavir">GitHub</a>
                </div>

            </div>
        </footer>              
    )
}

export default Footer