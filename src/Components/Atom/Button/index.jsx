/* eslint-disable react/prop-types */

function Button(props) {
  const {variant, className, onClick, type, children} = props;
  let buttonStyle = "";

  switch (variant) {
    case "primary":
      buttonStyle = "btn-primary";
      break;
    case "outline":
      buttonStyle = "btn-outline-primary";
      break;
    case "warning":
      buttonStyle = "btn-warning";
      break;
    default:
      break;
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${buttonStyle} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
