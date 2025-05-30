import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  // 배포 시 서브디렉터리에 올라가더라도 PUBLIC_URL이 자동으로 맞춰집니다
    const PUBLIC_URL = process.env.PUBLIC_URL

    return (
        <header className="flex max-w-[1440px] justify-between items-center px-8 py-4 mx-auto">
        {/* 로고 */}
        <div className="cursor-pointer w-[120px] flex-shrink-0">
            <Link to="/" onClick={() => console.log('로고 클릭됨')}>
            <img
                src={`${PUBLIC_URL}/images/Logo.png`}
                alt="logo"
                className="w-auto h-10"
            />
            </Link>
        </div>

        {/* 검색창 */}
        <div className="flex-[2] flex items-center bg-[#ececec] rounded px-4 py-2 max-w-[300px] w-full mx-5">
            <img
            src={`${PUBLIC_URL}/images/search.png`}
            alt="search"
            className="w-[18px] h-[18px] mr-2"
            />
            <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent border-none outline-none text-sm"
            />
        </div>

        {/* 아이콘들 */}
        <div className="w-[120px] flex gap-5 items-center">
            <img
            src={`${PUBLIC_URL}/images/top_right_menu2.png`}
            alt="cart"
            className="w-6 h-6 cursor-pointer"
            />
            <img
            src={`${PUBLIC_URL}/images/top_right_menu1.png`}
            alt="heart"
            className="w-6 h-6 cursor-pointer"
            />
            <img
            src={`${PUBLIC_URL}/images/top_right_menu3.png`}
            alt="user"
            className="w-6 h-6 cursor-pointer"
            />
        </div>
        </header>
    )
}

export default Header