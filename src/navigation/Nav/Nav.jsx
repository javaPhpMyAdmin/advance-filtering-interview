import './Nav.css';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import { useFilterContext } from '../../context/FiltersContex';

function Nav() {
  const { query, handleInputChange } = useFilterContext();

  return (
    <nav>
      <div className="nav-container">
        <input
          onChange={handleInputChange}
          type="text"
          className="search-input"
          placeholder="Enter your search shoes"
          value={query}
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
