import './SideBar.css';
import { Category } from '../Category';
import { Price } from '../Price';
import { Colors } from '../Colors';
import { useFilterContext } from '../../context/FiltersContex';

export default function SideBar() {
  const { handleCategoryChange } = useFilterContext();
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🌵 </h1>
      </div>
      <Category handleCategoryChange={handleCategoryChange} />
      <Price handleCategoryChange={handleCategoryChange} />
      <Colors handleCategoryChange={handleCategoryChange} />
    </section>
  );
}
