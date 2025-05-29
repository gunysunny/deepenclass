import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // 같은 폴더니까 유지

// 이미지 경로는 상위로 올라가서 images 폴더로 접근해야 함
import cartImg from '../../images/top_right_menu2.png';
import logoImg from '../../images/Logo.png';
import heartImg from '../../images/top_right_menu1.png';
import userImg from '../../images/top_right_menu3.png';
import searchIcon from '../../images/search.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/" onClick={() => console.log('로고 클릭됨')}>
                    <img src={logoImg} alt="logo" className="logo" />
                </Link>
            </div>
            <div className="search-container">
                <img src={searchIcon} alt="search" className="search-icon" />
                <input type="text" placeholder="Search..." className="search-input" />
            </div>
            <div className="spacer" /> {/* ← 가상의 여백 영역 */}
            <div className="icons">
                <img src={cartImg} alt="cart" className="icon-img" />
                <img src={heartImg} alt="heart" className="icon-img" />
                <img src={userImg} alt="user" className="icon-img" />
            </div>
        </header>
    );
};

export default Header;