import React from "react";
import { HashLoader } from "react-spinners";

function Loader({fullscreen}) {
  return (
    <>
      {fullscreen ? (
        <div className="w-screen h-screen flex items-center justify-center">
          <HashLoader size={75} color="#6875f5" />
        </div>
      ) : (
        <div className="w-[90vw] flex items-center justify-center">
          <HashLoader size={75} color="#6875f5" />
        </div>
      )}
    </>
  );
}

export default Loader;
