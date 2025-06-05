import React from 'react'
import { Link } from 'react-router-dom'
import ShowNow from '@/components/Assets/shownow_Btn'

const ICONS = [
    { name: 'cart', file: 'top_right_menu2.png' },
    { name: 'heart', file: 'top_right_menu1.png' },
    { name: 'user', file: 'top_right_menu3.png' },
]

    export default function Header() {
    return (
        <header className="flex max-w-[1440px] justify-between items-center px-8 py-4 mx-auto">
            {/* 1) 로고 영역을 작은 컴포넌트로 분리 */}
            <LogoLink />


            {/* 2) 검색창 */}
            <SearchBar />

            {/* 3) 아이콘들: 배열 + map 으로 간단하게 */}
            <div className="w-[120px] flex gap-5 items-center">
                {ICONS.map(({ name, file }) => (
                <img
                    key={name}
                    src={`/images/${file}`}
                    alt={name}
                    className="w-6 h-6 cursor-pointer"
                />
                ))}
            </div>

        </header>
    )
    }

    // LogoLink 컴포넌트
    function LogoLink() {
    return (
        <div className="cursor-pointer w-[120px] flex-shrink-0">

            <Link to="/" onClick={() => console.log('로고 클릭')}>
                <img
                src={`/images/Logo.png`}
                alt="logo"
                className="w-auto h-10"
                />
            </Link>
        </div>
    )
    }

    // SearchBar 컴포넌트
    function SearchBar() {
    return (
        <div className="flex-[2] flex items-center bg-[#ececec] rounded px-4 py-2 max-w-[300px] w-full mx-5">
            <img
                src={`/images/search.png`}
                alt="search"
                className="w-[18px] h-[18px] mr-2"
            />
            <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent border-none outline-none text-sm"
            />
        </div>
    )
}