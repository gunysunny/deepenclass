import React, { useState, useEffect, useRef } from 'react';
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

const iconMap = {
    tag: <FiTag size={32} className="text-gray-700" />,
    creditCard: <FiCreditCard size={32} className="text-gray-700" />,
    truck: <FiTruck size={32} className="text-gray-700" />,
    laptop:      <FiMonitor    size={32} className="text-gray-700" />, 
    tablet:      <FiTablet     size={32} className="text-gray-700" />,
    accessories: <FiHardDrive  size={32} className="text-gray-700" />,
    gaming:      <FaGamepad    size={32} className="text-gray-700" />,
    headphones:  <FiHeadphones size={32} className="text-gray-700" />,
    speakers:    <FiSpeaker    size={32} className="text-gray-700" />,
    tv:          <FiTv         size={32} className="text-gray-700" />,
    console:     <FiCpu        size={32} className="text-gray-700" />,
    wearables:   <FiWatch      size={32} className="text-gray-700" />,
    drones:      <FiAirplay    size={32} className="text-gray-700" />,
    };

    export default function Category() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading]   = useState(true);
    const [error, setError]       = useState(null);

    // ← 이 ref를 스크롤 가능한 div에 연결
    const scrollRef = useRef(null);

    useEffect(() => {
        fetch('/categories')
        .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
        })
        .then(setCategories)
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p className="text-center py-8">로딩 중…</p>;
    if (error)   return <p className="text-center py-8">에러 발생: {error}</p>;

    return (
        <section className="py-8 bg-white w-full max-w-screen-xl mx-auto my-20 px-4 md:px-40">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Browse By Category
            </h2>

            {/* onWheel 훅을 달아서 휠 움직임으로 수평 스크롤 */}
            <div
            ref={scrollRef}
            onWheel={e => {
                e.preventDefault();
                scrollRef.current.scrollLeft += e.deltaY;
            }}
            className="flex space-x-4 overflow-x-auto hide-scrollbar overscroll-contain justify-between"
            >
                {categories.map(({ id, label, imgSrc, iconType, icon }) => (
                <button
                    key={id}
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
                    <img
                        src={imgSrc}
                        alt={label}
                        className="w-12 h-12 mb-2 object-contain"
                    />
                    ) : (
                    <div className="mb-2">{iconMap[icon]}</div>
                    )}
                    <span className="text-xs text-gray-600">{label}</span>
                </button>
                ))}
            </div>
        </section>
    );
}