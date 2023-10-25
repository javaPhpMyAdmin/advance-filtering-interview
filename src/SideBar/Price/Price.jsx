import { Input } from '../../components';
import './Price.css';
export default function Price({ handleCategoryChange }) {
  // const handleChange = () => {};
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
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
        value={50}
        title="$0 - 50"
        name="test"
      />
      <Input
        handleCategoryChange={handleCategoryChange}
        value={100}
        title="$50 - 100"
        name="test"
      />
      <Input
        handleCategoryChange={handleCategoryChange}
        value={150}
        title="$100 - 150"
        name="test"
      />
      <Input
        handleCategoryChange={handleCategoryChange}
        value={200}
        title="Over $150"
        name="test"
      />
    </div>
  );
}
