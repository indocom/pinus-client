import React from "react";

const Visit: React.FC = () => {
  return (
    <div className={`flex flex-col w-screen h-auto items-center mt-10 mb-24`}>
      <div className={`w-full h-full`}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfCtjQZKFKwVFl4aRBSYXyN4SIdnH_30QtFQoNSa4TKwKU_sw/viewform?embedded=true"
          width="100%"
          height="1400"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Visit;
