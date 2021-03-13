import React from "react";

const Visit: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-1/4 items-center mt-10">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfCtjQZKFKwVFl4aRBSYXyN4SIdnH_30QtFQoNSa4TKwKU_sw/viewform?embedded=true"
        width="100%"
        height="1765"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Visit;
