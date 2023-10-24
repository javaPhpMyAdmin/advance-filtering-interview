import './SideBar.css';
import { Category } from '../Category';
import { Price } from '../Price';
import { Colors } from '../Colors';

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🌵 </h1>
      </div>
      <Category />
      <Price />
      <Colors />
    </section>
  );
}
