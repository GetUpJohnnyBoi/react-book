import CoffeeLogo from '../images/logo.svg';

function Header() {
  return (
    <header>
      <img src={CoffeeLogo} alt="coffee-logo" />
      <h1>Code Café</h1>
    </header>
  );
}

export default Header;
