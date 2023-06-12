import React from "react";

export default function StoreSearcher() {
  return (
    <div>
      <h2 className="text-2xl font-bold uppercase">Search your store</h2>
      <input
        type="search"
        className="border border-b-2 rounded border-gray-300"
        placeholder="Search your store here"
      />
    </div>
  );
}
