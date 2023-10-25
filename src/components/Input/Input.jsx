export default function Input({
  handleCategoryChange,
  value,
  title,
  name,
  color,
}) {
  return (
    <label className="sidebar-label-container">
      <input
        onChange={handleCategoryChange}
        value={value}
        type="radio"
        name={name}
      />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
}
