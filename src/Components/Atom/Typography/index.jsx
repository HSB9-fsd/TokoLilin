/* eslint-disable react/prop-types */

function Typog(props) {
  const {variant, className, children} = props;
  let typogStyle = "";

  switch (variant) {
    case "h1":
      typogStyle = "text-blueDark text-3xl";
      break;
    case "h1Dark":
      typogStyle = "text-black text-2xl";
      break;
    default:
      break;
  }

  return <h2 className={`${typogStyle} ${className}`}>{children}</h2>;
}

export default Typog;
