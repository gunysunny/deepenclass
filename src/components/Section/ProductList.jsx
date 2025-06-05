import React, { useState } from 'react'

const categories = ['All', 'Clothes', 'Electronics', 'Furniture', 'Shoes']

const dummyProducts = Array.from({ length: 8 }).map((_, idx) => ({
    id: idx + 1,
    name: `Product Name ${idx + 1}`,
    price: `$${(idx + 1) * 100}`,
    }))

    function ProductList() {
        const [activeCategory, setActiveCategory] = useState('All')
        // 각 상품의 좋아요 상태를 객체로 관리: { [productId]: true/false }
        const [likedMap, setLikedMap] = useState({})

        const toggleLike = (productId) => {
            setLikedMap((prev) => ({
            ...prev,
            [productId]: !prev[productId],
        }))
    }

    return (
        <section className="max-w-[1440px] mx-auto px-40 py-12">
            {/* 카테고리 메뉴 */}
            <nav className="flex space-x-8 border-b border-gray-200 mb-8">
                {categories.map((cat) => {
                const isActive = cat === activeCategory
                return (
                    <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`
                        pb-2
                        text-sm
                        font-medium
                        ${isActive
                        ? 'text-gray-900 border-b-2 border-black'
                        : 'text-gray-500'}
                        focus:outline-none
                        transition-colors
                        duration-200
                    `}
                    >
                    {cat}
                    </button>
                )
                })}
            </nav>

            {/* 상품 그리드 */}
            <div className="grid grid-cols-4 gap-8">
                {dummyProducts.map((product) => {
                const isLiked = !!likedMap[product.id]

                return (
                    <div
                    key={product.id}
                    className="relative bg-gray-100 rounded-lg p-3 flex flex-col"
                    >
                    {/* 좋아요 아이콘 (SVG 이미지) */}
                    <img
                        src={isLiked ? '/images/Like_red.svg' : '/images/Like.svg'}
                        alt={isLiked ? 'liked' : 'not liked'}
                        onClick={() => toggleLike(product.id)}
                        className="absolute top-4 right-4 w-6 h-6 cursor-pointer transition-opacity duration-200"
                    />

                        {/* 회색 박스 안의 이미지 플레이스홀더 */}
                        <div className="h-40 rounded mb-4 flex-shrink-0" />

                        {/* 회색 박스 안 아래쪽에 상품명, 가격, 버튼 */}
                        <h3 className="text-sm font-medium text-gray-900 mb-1 text-center">
                            {product.name}
                        </h3>
                        <p className="text-lg font-bold text-gray-800 mb-4 text-center">
                            {product.price}
                        </p>

                        <button
                            className="
                            mt-auto
                            mx-auto
                            w-8/12
                            bg-black
                            text-white
                            text-sm
                            py-2
                            rounded
                            hover:bg-gray-800
                            transition-colors
                            duration-200
                            focus:outline-none
                            "
                        >
                            Buy Now
                        </button>
                    </div>
                )
                })}
            </div>
        </section>
    )
}

export default ProductList