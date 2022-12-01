import { Link } from "react-router-dom";
import { gameOverPage, home } from "../../constants";
const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to={home}>About</Link>
      <Link to={gameOverPage}>Careers</Link>
    </div>
  );
};
export default Navbar;
