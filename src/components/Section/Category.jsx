import React, { useState, useEffect, useRef } from 'react';
// React 아이콘 라이브러리에서 다양한 아이콘을 불러옴
import {
    FiWatch,
    FiTag,
    FiCreditCard,
    FiTruck,
    FiMonitor,
    FiTablet,
    FiHardDrive,
    FiHeadphones,
    FiSpeaker,
    FiTv,
    FiCpu,
    FiAirplay,
} from 'react-icons/fi';
import { FaGamepad } from 'react-icons/fa';

// iconMap: 카테고리 키값에 따라 렌더링할 아이콘을 매핑해 놓은 객체
const iconMap = {
    tag: <FiTag size={32} className="text-gray-700" />,         // 태그 아이콘
    creditCard: <FiCreditCard size={32} className="text-gray-700" />, // 신용카드 아이콘
    truck: <FiTruck size={32} className="text-gray-700" />,      // 트럭 아이콘
    laptop: <FiMonitor size={32} className="text-gray-700" />,    // 모니터(노트북) 아이콘
    tablet: <FiTablet size={32} className="text-gray-700" />,     // 태블릿 아이콘
    accessories: <FiHardDrive size={32} className="text-gray-700" />, // 액세서리(외장 하드) 아이콘
    gaming: <FaGamepad size={32} className="text-gray-700" />,     // 게임패드 아이콘
    headphones: <FiHeadphones size={32} className="text-gray-700" />, // 헤드폰 아이콘
    speakers: <FiSpeaker size={32} className="text-gray-700" />,   // 스피커 아이콘
    tv: <FiTv size={32} className="text-gray-700" />,            // TV 아이콘
    console: <FiCpu size={32} className="text-gray-700" />,      // CPU(콘솔) 아이콘
    wearables: <FiWatch size={32} className="text-gray-700" />,    // 웨어러블(시계) 아이콘
    drones: <FiAirplay size={32} className="text-gray-700" />,    // 드론 아이콘
};

// Category 컴포넌트 정의
export default function Category() {
    // categories: API 에서 받아온 카테고리 목록 저장
    // loading: 데이터 로딩 상태 표시
    // error: 에러 메시지 저장
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // scrollRef: 가로 스크롤을 제어할 div 요소에 대한 ref
    const scrollRef = useRef(null);

    // 컴포넌트 마운트 시 한 번 실행되어 데이터 fetch 수행
    useEffect(() => {
        fetch('/categories')                     // '/categories' 엔드포인트로 요청
            .then(res => {
                if (!res.ok) {
                    // HTTP 에러 발생 시 예외 던짐
                    throw new Error(`HTTP ${res.status}`);
                }
                return res.json();                // JSON 파싱
            })
            .then(data => setCategories(data))  // 받아온 데이터를 상태에 저장
            .catch(err => setError(err.message))// 에러 발생 시 메시지 저장
            .finally(() => setLoading(false));  // 로딩 종료
    }, []); // 빈 배열 => 마운트 때만 실행

    // 로딩 중 UI
    if (loading) return <p className="text-center py-8">로딩 중…</p>;
    // 에러 발생 시 UI
    if (error)   return <p className="text-center py-8">에러 발생: {error}</p>;

    // 렌더링할 JSX 반환
    return (
        <section className="py-8 bg-white w-full max-w-screen-xl mx-auto my-20 px-4 md:px-40">
            {/* Section 제목 */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Browse By Category
            </h2>

            {/* 가로 스크롤 컨테이너 */}
            <div
                ref={scrollRef}                     // scrollRef 연결
                onWheel={e => {                     // 마우스 휠 이벤트 핸들러
                    e.preventDefault();            // 기본 휠 스크롤 방지
                    // 수직 휠(deltaY) 값을 가로(scrollLeft)에 더해 수평 스크롤
                    scrollRef.current.scrollLeft += e.deltaY;
                }}
                className="flex space-x-4 overflow-x-auto hide-scrollbar overscroll-contain justify-between"
            >
                {/* 카테고리 배열을 순회하며 버튼 생성 */}
                {categories.map(({ id, label, imgSrc, iconType, icon }) => (
                    <button
                        key={id}                // React key
                        className="
                            flex-shrink-0 w-40 h-40
                            bg-gray-100 rounded-lg
                            flex flex-col items-center justify-center
                            text-center shadow-sm
                            transform transition-transform duration-200
                            hover:-translate-y-2 hover:shadow-lg
                            focus:outline-none
                        "
                    >
                        {iconType === 'svg' ? (
                            // imgSrc가 있는 경우, SVG 이미지 렌더
                            <img
                                src={imgSrc}
                                alt={label}
                                className="w-12 h-12 mb-2 object-contain"
                            />
                        ) : (
                            // iconMap에서 아이콘 컴포넌트 렌더
                            <div className="mb-2">{iconMap[icon]}</div>
                        )}
                        {/* 카테고리 레이블 표시 */}
                        <span className="text-xs text-gray-600">{label}</span>
                    </button>
                ))}
            </div>
        </section>
    );
}
