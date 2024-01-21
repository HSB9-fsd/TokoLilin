/* eslint-disable react/prop-types */
import {FaRegSmileBeam} from "react-icons/fa";

function Empty({place}) {
  return (
    <div className="my-20 flex-center flex-col">
      <p>Your {place} Item is empty</p>
      <span className="text-6xl mt-3">
        <FaRegSmileBeam />
      </span>
    </div>
  );
}

export default Empty;
