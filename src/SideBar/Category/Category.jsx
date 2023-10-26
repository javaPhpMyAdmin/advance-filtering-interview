import { Input } from '../../components';
import { useFilterContext } from '../../context/FiltersContex';
import './Category.css';

export default function Category() {
  const { handleFiltersByCategory } = useFilterContext();
  console.log('RENDERING FROM Category');
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            value=""
            name="test"
            onChange={handleFiltersByCategory}
          />
          <span className="checkmark"></span> All
        </label>

        <Input
          handleCategoryChange={handleFiltersByCategory}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleCategoryChange={handleFiltersByCategory}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleCategoryChange={handleFiltersByCategory}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleCategoryChange={handleFiltersByCategory}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}
