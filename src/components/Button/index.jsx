import "./style.css";

export function Button({ text, onClick }) {
  return (
    <button className="button" value={text} onClick={onClick}>
      {text}
    </button>
  );
}
