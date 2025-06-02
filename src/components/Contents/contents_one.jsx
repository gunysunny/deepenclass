// src/components/Contents/Contents.jsx
import React from 'react'
import ShowNowbk from '../Assets/shownow_Btnbk.jsx'

// public/images 폴더를 기준으로 한 이미지 베이스 경로
const baseImg = process.env.PUBLIC_URL + '/images'

// 왼쪽 섹션에 들어갈 아이템 데이터
const FEATURES = [
    {
        id: 'ps5',
        title: <>Playstation<br />5</>,
        desc: 'Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.',
        img: 'PlayStation.png',
        wrapper: 'flex items-center text-4xl',
        imgWrapper: 'w-2/5',
        textWrapper: 'w-3/5 p-5 box-border text-gray-600 leading-6',
        titleClass: 'text-5xl font-normal text-black mb-4',
        descClass: ''
    },
    {
        id: 'airpods',
        title: <>Apple<br />AirPods<br /><strong>Max</strong></>,
        desc: 'Computational audio. Listen, it’s powerful',
        img: 'hero__gnfk5g59t0qe_xlarge_2x 1.png',
        wrapper: 'w-1/2 flex items-center bg-gray-200 p-5 box-border',
        imgWrapper: 'w-1/2',
        textWrapper: 'w-1/2 pl-5',
        titleClass: 'text-2xl leading-10 mb-2',
        descClass: 'text-sm text-gray-500 leading-6'
    },
    {
        id: 'visionpro',
        title: <>Apple<br />Vision <strong>Pro</strong></>,
        desc: 'An immersive way to experience entertainment',
        img: 'image 36.png',
        wrapper: 'w-1/2 flex items-center justify-around bg-gray-800 p-5 box-border',
        imgWrapper: 'w-1/2',
        textWrapper: 'w-1/2 pl-5 text-white',
        titleClass: 'text-2xl leading-10',
        descClass: 'text-sm text-gray-500 leading-6'
    }
]

    export default function Contents() {
    return (
        <main className="w-full">
            <div className="flex w-full mx-auto">
                {/* 왼쪽: PS5 한 개, 그 아래 AirPods/VisionPro 두 개 */}
                <div className="w-1/2 flex flex-col space-y-6">
                    <FeatureCard {...FEATURES[0]} />
                    <div className="flex justify-between">
                        {FEATURES.slice(1).map(item => (
                        <FeatureCard key={item.id} {...item} />
                        ))}
                    </div>
                </div>

                {/* 오른쪽: MacBook Air */}
                <RightSection />
            </div>
        </main>
    )
    }

    // 재사용 가능한 카드 컴포넌트
    function FeatureCard({
    id, title, desc, img,
    wrapper, imgWrapper, textWrapper,
    titleClass, descClass
    }) {
    return (
        <div className={wrapper}>
        <div className={imgWrapper}>
            <img
            src={`${baseImg}/${img}`}
            alt={id}
            className="w-full h-auto"
            />
        </div>
        <div className={textWrapper}>
            <p className={titleClass}>{title}</p>
            {desc && <p className={descClass}>{desc}</p>}
        </div>
        </div>
    )
    }

    // 오른쪽 섹션 전용 컴포넌트
    function RightSection() {
    return (
        <div className="w-1/2">
        <div className="flex items-center justify-between bg-gray-200 h-full">
            <div className="w-1/2 p-5 space-y-4">
            <p className="text-6xl leading-tight font-light">
                Macbook<br /><strong>Air</strong>
            </p>
            <p className="text-sm text-gray-500 leading-6">
                The new 15-inch MacBook Air makes room for more of what you love
                with a spacious Liquid Retina display.
            </p>
            <ShowNowbk />
            </div>
            <div className="w-1/2">
            <img
                src={`${baseImg}/MacBook Pro 14.png`}
                alt="MacBook Air"
                className="w-full h-auto"
            />
            </div>
        </div>
        </div>
    )
}
