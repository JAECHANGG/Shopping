import React from "react";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="flex items-center shrink-0">
      <img
        src={photoURL}
        alt={displayName}
        className="w-10 h-10 rounded-full mr-2"
      />
      {/* span은 항상 hidden이지만 middle 사이즈부터는 block으로 변경된다. */}
      <span className="hidden md:block">{displayName}</span>
    </div>
  );
}
