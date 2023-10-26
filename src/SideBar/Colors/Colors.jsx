import { Input } from '../../components';
import { useFilterContext } from '../../context/FiltersContex';
import './Colors.css';

export default function Colors() {
  const { handleFiltersByColor } = useFilterContext();
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input
          type="radio"
          value=""
          name="test"
          onChange={handleFiltersByColor}
        />
        <span className="checkmark all"></span> All
      </label>
      <Input
        handleCategoryChange={handleFiltersByColor}
        value="black"
        name="test"
        title="Black"
        color="black"
      />
      <Input
        handleCategoryChange={handleFiltersByColor}
        value="green"
        name="test"
        title="Green"
        color="green"
      />
      <Input
        handleCategoryChange={handleFiltersByColor}
        value="red"
        name="test"
        title="Red"
        color="red"
      />
      <Input
        handleCategoryChange={handleFiltersByColor}
        value="blue"
        name="test"
        title="Blue"
        color="blue"
      />
      <label className="sidebar-label-container">
        <input
          type="radio"
          value="white"
          name="white"
          onChange={handleFiltersByColor}
        />
        <span
          className="checkmark"
          style={{ backgroundColor: 'white', border: '2px solid black' }}
        ></span>{' '}
        White
      </label>
    </div>
  );
}
