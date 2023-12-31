import React from "react";

const SearchBox = ({saerchfield, searchChange}) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba b--pink bg-lightest-pink"
                type="search" 
                placeholder="Search Robots"
                onChange={searchChange} />
                
        </div>
    );
}

export default SearchBox;