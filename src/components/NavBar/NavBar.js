import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header>
      <nav>
        <h2 className="nameStore">MegaByte Electronica</h2>

        <ul className="unorderedList">
          <a href="#">💻</a>
          <li className="ListItems">
            <button>Monitores</button>
          </li>
          <li className="ListItems">
            <button>Celulares</button>
          </li>
          <li className="ListItems">
            <button>Procesadores</button>
          </li>
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
