import React from "react";

export default function LoadingBar(props) {
  return (
    <div className="w-1/2 h-11 bg-yellow-200 text-gray-800 m-auto mb-10 rounded" {...props.rest}>
      Loading ...
    </div>
  );
}
