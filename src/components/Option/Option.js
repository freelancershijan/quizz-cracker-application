import React from 'react';

const Option = ({ option, handleSelect }) => {
    return (
        <div onClick={() => handleSelect(option)} className='p-5 border-2 border-black flex items-center'>
            <input className='mr-5' type="radio" name="fav_language" ></input>
            <p>{option}</p>

        </div>
    );
};

export default Option;