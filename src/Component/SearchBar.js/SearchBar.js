import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div class="input-group mb-3 w-50 mx-auto mt-5">
        <input
          type="text"
          class="form-control"
          placeholder="Search for your product"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button class="btn btn-outline-success" type="button" id="button-addon2">
          Button
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
