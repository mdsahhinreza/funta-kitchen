import React from "react";
import notfound from "../../assets/Shared/notfound.gif";

const NotFound = () => {
  return (
    <div className="text-center" style={{ minHeight: "85vh" }}>
      <img src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
