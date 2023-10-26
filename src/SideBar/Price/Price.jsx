import { Input } from '../../components';
import { useFilterContext } from '../../context/FiltersContex';
import './Price.css';
export default function Price() {
  const { handleFiltersByPrice } = useFilterContext();
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input
          type="radio"
          value=""
          name="test"
          onChange={handleFiltersByPrice}
        />
        <span className="checkmark"></span> All
      </label>
      <Input
        handleCategoryChange={handleFiltersByPrice}
        value={50}
        title="$0 - 50"
        name="test"
      />
      <Input
        handleCategoryChange={handleFiltersByPrice}
        value={100}
        title="$50 - 100"
        name="test"
      />
      <Input
        handleCategoryChange={handleFiltersByPrice}
        value={150}
        title="$100 - 150"
        name="test"
      />
      <Input
        handleCategoryChange={handleFiltersByPrice}
        value={200}
        title="Over $150"
        name="test"
      />
    </div>
  );
}
