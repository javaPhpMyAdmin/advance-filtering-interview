import { Input } from '../../components';
import './Colors.css';

export default function Colors({ handleCategoryChange }) {
  // const handleChange = () => {};
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input
          type="radio"
          value=""
          name="test"
          onChange={handleCategoryChange}
        />
        <span className="checkmark all"></span> All
      </label>
      <Input
        handleCategoryChange={handleCategoryChange}
        value="black"
        name="test"
        title="Black"
        color="black"
      />
      <Input
        handleCategoryChange={handleCategoryChange}
        value="green"
        name="test"
        title="Green"
        color="green"
      />
      <Input
        handleCategoryChange={handleCategoryChange}
        value="red"
        name="test"
        title="Red"
        color="red"
      />
      <Input
        handleCategoryChange={handleCategoryChange}
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
          onChange={handleCategoryChange}
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
