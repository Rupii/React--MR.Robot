import React from 'react';

const Search = ({search, searchChange}) => {
    return (
        <div className = 'tc'>
            <input className = 'pa3 ba b--green bg-lightest-blue'
             type = 'search' placeholder = 'search robot'
             onChange = {searchChange} />
        </div>
    );
}

export default Search;