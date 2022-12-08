import React from "react";

const ImageLinkForm = () => {
  return (
    <div className="mt4">
      <div className="mb4 flex flex-column items-center">
        <p className="tc white f3">{"Shubham, your current rank is..."}</p>
        <p className="tc white f1">{"#5"}</p>
      </div>
      <p className="f5 moon-gray tc flex justify-center">
        {"This Super Brain will detect faces in your pictures. Give it a try"}
      </p>
      <div className="flex justify-center">
        <div
          className="w-50-ns w-60-l w-70-m mv2 pa1 pa2-ns br3 shadow-5"
          style={{
            backgroundColor: "#2F2A62",
            opacity: "0.8",
            backgroundImage:
              "radial-gradient(#e5e5f7 0.5px, transparent 0.5px), radial-gradient(#e5e5f7 0.5px, #2F2A62 0.5px)",
            backgroundSize: "10px 10px",
            backgroundPosition: "0 0,5px 5px",
          }}
        >
          <input
            className="f4 pa1 pa2-ns w-70 bn center"
            type="text"
            name=""
            id=""
          />
          <button className="w-30 pointer bn f4 link pa1 pa2-ns white bg-dark-pink">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
