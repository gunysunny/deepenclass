import React from 'react';
import '@/components/Assets/common.css'; // 스타일 분리



const ShowNowbk = () => {
    return (
            <button className='shownowbk w-48 inline-block px-10 py-4 border border-solid border-[#333333] box-border rounded-md transition duration-500 
            hover:bg-[#333] hover:text-white hover:border-transparent'>Show Now</button>
        
    );
};

export default ShowNowbk;