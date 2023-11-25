/* eslint-disable react/prop-types */
function Card(props) {
  const {className, variant, children} = props;
  let cardStyle = "";
  switch (variant) {
    case "card-lg":
      cardStyle = "max-w-lg shadow-lg";
      break;

    default:
      break;
  }
  return <div className={`${cardStyle} ${className}`}>{children}</div>;
}

export default Card;
