export default function Buttons({ handleButtonsChange, value, title }) {
  return (
    <button onClick={handleButtonsChange} value={value} className="btns">
      {title}
    </button>
  );
}
