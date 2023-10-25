import { Input } from '../../components';
import './Category.css';

export default function Category({ handleCategoryChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            value=""
            name="test"
            onChange={handleCategoryChange}
          />
          <span className="checkmark"></span> All
        </label>

        <Input
          handleCategoryChange={handleCategoryChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleCategoryChange={handleCategoryChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleCategoryChange={handleCategoryChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleCategoryChange={handleCategoryChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}
