// src/components/Contents/Contents.jsx
import React from "react"
import ShowNowbk from "@/components/Assets/shownow_Btnbk.jsx"

// public/images 폴더를 기준으로 한 이미지 베이스 경로를 env 대신 절대 경로로 지정
// 이제 process.env.PUBLIC_URL을 쓰지 않고, “/images/파일명” 형태로 바로 접근합니다.

const FEATURES = [
        {
            id: "ps5",
            title: <>Playstation 5</>,
            desc: "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
            img: "PlayStation.png",
            wrapper: "flex items-center bg-white box-border h-full",
            imgWrapper: "w-2/3",
            textWrapper: "w-3/5 p-5 box-border text-gray-600 leading-6",
            titleClass: "text-5xl font-normal text-black mb-4",
            descClass: ""
        },
        {
            id: "airpods",
            title: (
            <>
                Apple
                <br />
                AirPods
                <br />
                <strong>Max</strong>
            </>
            ),
            desc: "Computational audio. Listen, it’s powerful",
            img: "hero__gnfk5g59t0qe_xlarge_2x 1.png",
            wrapper: "flex items-center justify-between bg-gray-200 box-border h-full",
            imgWrapper: "w-1/3",
            textWrapper: "w-2/3 p-4 box-border",
            titleClass: "text-2xl leading-10 mb-2",
            descClass: "text-sm text-gray-500 leading-6"
        },
        {
            id: "visionpro",
            title: (
            <>
                Apple
                <br />
                Vision <strong>Pro</strong>
            </>
            ),
            desc: "An immersive way to experience entertainment",
            img: "image 36.png",
            wrapper: "flex items-center justify-between bg-[#353535] box-border h-full",
            imgWrapper: "w-1/3",
            textWrapper: "w-2/3 p-4 box-border text-white",
            titleClass: "text-2xl leading-10",
            descClass: "text-sm text-gray-500 leading-6"
        }
    ]

    export default function Contents() {
    return (
            <main className="w-full bg-white">
            {/* 전체 콘텐츠 최대 너비 1440px로 고정, 화면 중앙 정렬 */}
                <div className="mx-auto w-full max-w-[1440px]">
                    {/* 전체를 2열 레이아웃으로 분리, 높이 동일하게 맞추기 */}
                    <div className="flex items-stretch">
                    {/* 왼쪽: PS5 한 개, 그 아래 AirPods/VisionPro 두 개 */}
                        <div className="w-1/2 flex flex-col">
                            {/* 1. PS5 카드 (왼쪽 위) */}
                            <FeatureCard {...FEATURES[0]} />

                            {/* 2. AirPods Max + Vision Pro 카드 (왼쪽 아래) */}
                            <div className="flex flex-1">
                                {FEATURES.slice(1).map((item) => (
                                    <FeatureCard key={item.id} {...item} />
                                ))}
                            </div>
                        </div>

                        {/* 오른쪽: MacBook Air */}
                        <RightSection />
                    </div>
                </div>
            </main>
        )
    }

    // ─── 재사용 가능한 카드 컴포넌트 ───
    function FeatureCard({
    id,
    title,
    desc,
    img,
    wrapper,
    imgWrapper,
    textWrapper,
    titleClass,
    descClass
    }) {
    return (
            <div className={wrapper}>
                <div className={imgWrapper}>
                    <img
                    src={`/images/${img}`}
                    alt={id}
                    className="h-auto w-full object-contain"
                    />
                </div>
                <div className={textWrapper}>
                    <p className={titleClass}>{title}</p>
                    {desc && <p className={descClass}>{desc}</p>}
                </div>
            </div>
        )
    }

    // ─── 오른쪽 섹션 전용 컴포넌트 ───
    function RightSection() {
    return (
        <div className="w-1/2">
        {/* h-full 주어서 부모 flex-items-stretch에 맞춰 전체 높이 채움 */}
            <div className="flex items-center justify-between bg-gray-200 h-full box-border">
                {/* 텍스트 영역 (전체 너비의 2/3) */}
                <div className="w-2/3 p-16 space-y-4 box-border">
                    <p className="text-6xl leading-tight font-light">
                        Macbook
                        <br />
                        <strong>Air</strong>
                    </p>
                    <p className="text-sm text-gray-500 leading-6">
                        The new 15-inch MacBook Air makes room for more of what you love
                        with a spacious Liquid Retina display.
                    </p>
                    <ShowNowbk />
                </div>

                {/* 이미지 영역 (전체 너비의 1/3) */}
                <div className="w-1/3 box-border">
                    <img
                        src={`/images/MacBook Pro 14.png`}
                        alt="MacBook Air"
                        className="h-auto w-full object-contain"
                    />
                </div>
            </div>
        </div>
    )
}