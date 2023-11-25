/* eslint-disable react/prop-types */

function Container(props) {
  const {className, children} = props;
  return <section className={`container ${className}`}>{children}</section>;
}

export default Container;
