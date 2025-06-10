import React from 'react'
import ShowNow from '@/components/Assets/Shownow_Btn'

function Banner() {
    const baseImg = process.env.PUBLIC_URL + '/images'

    return (
        <section className="bg-[#211C24] w-[1440px] h-[632px] mx-auto px-[160px]">
            <div className="flex justify-between items-center max-w-[1440px] mx-auto h-full">
                {/* 왼쪽 박스 */}
                <div className="text-white flex flex-col ">
                    <p className="opacity-40 text-[25px] font-normal">Pro.Beyond.</p>
                    <h1 className="font-thin text-[96px] tracking-[-1px]">
                        IPhone 14 <strong>Pro</strong>
                    </h1>
                    <p className="text-[#909090] text-[18px]">
                        Created to change everything for the better. For everyone
                    </p>
                    <ShowNow />
                </div>

                {/* 오른쪽 박스 */}
                <div className="h-full">
                    <img
                        src={`${baseImg}/Iphone_Image.png`}
                        alt="banner"
                        className="w-auto h-full object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default Banner;