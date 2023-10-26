import { Button } from '../../components';
import { useFilterContext } from '../../context/FiltersContex';
import './Recommended.css';

export default function Recommended() {
  const { handleButtonsChange } = useFilterContext();
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-btns">
        <Button
          handleButtonsChange={handleButtonsChange}
          value=""
          title="All Prducts"
        />
        <Button
          handleButtonsChange={handleButtonsChange}
          value="Nike"
          title="Nike"
        />
        <Button
          handleButtonsChange={handleButtonsChange}
          value="Adidas"
          title="Adidas"
        />
        <Button
          handleButtonsChange={handleButtonsChange}
          value="Puma"
          title="Puma"
        />
        <Button
          handleButtonsChange={handleButtonsChange}
          value="Vans"
          title="Vans"
        />
      </div>
    </div>
  );
}
