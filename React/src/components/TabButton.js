import "../styles.css";

export const TabButton = (props) => {
  return (
    <button className={props.selected ? "selected" : ""} {...props}>
      {props.name}
    </button>
  );
};
