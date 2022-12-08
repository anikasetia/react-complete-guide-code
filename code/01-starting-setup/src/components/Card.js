import "./Card.css";

export const Card = (props) => (
  <div className={"card " + props.className}>{props.children}</div>
);
