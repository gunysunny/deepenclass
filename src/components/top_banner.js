import React from 'react';
import './top_banner.css'; // 스타일 분리
import bannerImage from '../images/Iphone Image.png';
import ShowNow from './shownow_Btn';

const Banner = () => {
    return (
        <section>
            <div className='background'>
                <div className='left_box'>
                    <p className='opacity'>Pro.Beyond.</p>
                    <h1 className='productName'>IPhone 14 <strong>Pro</strong></h1>
                    <p className='latest'>Created to change everything for the better. For everyone</p>
                    <ShowNow />
                    {/* 버튼전용 컴포넌트 */}
                </div>
                <div className='right_box'>
                    <img src={bannerImage} alt="banner" className="top_banner" />
                </div>
            </div>
        </section>
    );
};

export default Banner;