import React from "react";

const SearchBox = props => {
  // const onChange = e => {};

  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search robot'
        onChange={props.onChange}
      />
    </div>
  );
};

export default SearchBox;
