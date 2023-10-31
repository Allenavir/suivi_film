import '../styles/Header.css';
import logo from '../assets/logo.png';

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function Header() {
    // Create a Date object for the current date and time
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('fr-FR', options);
    const formattedDateWithCapital = capitalizeFirstLetter(formattedDate);

    return (
        <header>
            <div id="logo">
            <img className='logo' src={logo} alt="logo"/>
            </div>
            <div id='mainTitle'>Purrfect WishList</div>
            <div id="rightMenu">
                <div id='currentDate'> {formattedDateWithCapital}</div>
                <div className='logButton'>Loggin</div>
            </div>
        </header>
    )
}

export default Header