/* eslint-disable react/prop-types */

function Parag(props) {
  const { children, className, variant } = props;
  let pStye = "";
  switch (variant) {
    case "lg-black":
      pStye = "text-lg text-black";
      break;
    case "grey":
      pStye = "text-base text-[#5E6E89]";
      break;
    case "primary":
      pStye = "text-base text-primary";
      break;
    case "base-black":
      pStye = "text-base text-[#1d293f] text-medium";
      break;
    default:
      break;
  }

  return <p className={`${pStye} ${className}`}>{children}</p>;
}

export default Parag;
