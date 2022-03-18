import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/welcome">Welcome Page</Link>
        </li>
        <li>
          <Link to="/products">Products Page</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
