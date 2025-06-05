import React from 'react'
import { FiTag, FiCreditCard, FiTruck } from 'react-icons/fi'

const categories = [
    {
        id: 'electronics',
        label: 'Electronics',
        imgSrc: '/images/Phones.svg',
        iconType: 'svg',
    },
    {
        id: 'furniture',
        label: 'Furniture',
        imgSrc: '/images/middle_camera.svg',
        iconType: 'svg',
    },
    {
        id: 'Watch',
        label: 'Watch',
        imgSrc: '/images/Smart_Watches.svg',
        iconType: 'svg',
    },
    {
        id: 'discounts',
        label: 'Discounts',
        icon: <FiTag size={32} className="text-gray-700" />,
        iconType: 'react',
    },
    {
        id: 'payments',
        label: 'Payments',
        icon: <FiCreditCard size={32} className="text-gray-700" />,
        iconType: 'react',
    },
    {
        id: 'delivery',
        label: 'Delivery',
        icon: <FiTruck size={32} className="text-gray-700" />,
        iconType: 'react',
    },
]

export default function Category() {
    return (
        <section className="py-8 bg-white w-[1440px] mx-auto my-20 px-40">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Browse By Category
            </h2>

            <div className="flex space-x-4 overflow-x-auto justify-between">
                {categories.map(({ id, label, imgSrc, icon, iconType }) => (
                <div
                    key={id}
                    className="
                    flex-shrink-0
                    w-40 h-40
                    bg-gray-100
                    rounded-lg
                    flex flex-col items-center justify-center
                    text-center
                    shadow-sm
                    "
                >
                    {iconType === 'svg' ? (
                    <img
                        src={imgSrc}
                        alt={label}
                        className="w-8 h-8 mb-2 object-contain"
                    />
                    ) : (
                    <div className="mb-2">{icon}</div>
                    )}
                    <span className="text-xs text-gray-600">{label}</span>
                </div>
                ))}
            </div>
        </section>
    )
}