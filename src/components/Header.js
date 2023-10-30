import '../styles/Header.css';

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
            <div id='currentDate'> {formattedDateWithCapital}</div>
            <div id='mainTitle'>Purrfect WishList</div>            
            <div >Loggin</div>
        </header>
    )

}

export default Header