import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

function SearchBar({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);
    const [searchWord, setSearchWord] = useState('');

    const handleChange = (event) => {
        const searchWord = event.target.value;
        setSearchWord(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]); 
        setSearchWord('');
    }

    return (
        <div className="search">
            <div className="search-input">
                <input type="text" value={searchWord}
                    placeholder={placeholder} onChange={handleChange} />
                <div className="search-icon">
                    {searchWord.length===0 ? <SearchIcon /> :
                     <CloseIcon className="clear-btn" onClick={clearInput} /> }
                    </div>
            </div>
            {filteredData.length !== 0 && (
                <div className="data-result">
                    {filteredData.map((value, key) => {
                        return (
                            <a className="data-item" href={value.link} target="_blank" rel="noreferrer" >
                                <p>{value.title}</p></a>
                        );
                    })}
                </div>
            )}

        </div>
    )
}
export default SearchBar

