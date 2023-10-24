import './Nav.css';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes"
        />
      </div>
      <div className="profile-container">
        <a href="#" className="nav-icons">
          <FiHeart />
        </a>
        <a href="#" className="nav-icons">
          <AiOutlineShoppingCart />
        </a>
        <a href="#" className="nav-icons">
          <AiOutlineUserAdd />
        </a>
      </div>
    </nav>
  );
}
export default Nav;
