import ShowNowbk from '../Assets/shownow_Btnbk.jsx';
import './contents_one.css';

import playStationImage from '../../images/PlayStation.png';
import airPods from '../../images/hero__gnfk5g59t0qe_xlarge_2x 1.png';
import visionPro from '../../images/image 36.png';
import macbookAir from '../../images/MacBook Pro 14.png';
const Contents = () => {
    return (
        <middle>
            {/* 좌우 2등분 플렉스 */}
            <div className='flex'>

                {/* 좌측 플스, 에어팟, 비전프로 컨트롤 */}
                <div className='flex_left'>
                    <div className='playstation'>
                        <div className='PS_img'>
                            <img src={playStationImage} alt="content" className="PStation" />
                        </div>
                        <div className='PS_text'>
                            <p className='product_Name'>Playstation 5</p>
                            <p>Incredibly powerful CPUs, GPUs, and an SSD with <br/>integrated I/O wull redefine your PlayStation experience.</p>
                        </div>
                    </div>
                    {/* 플스 끝 */}
                
                    {/* 에어팟 비전프로 */}
                    <div className='Apple_item'>   
                        <div className='airpods'>
                            <div className='airpods_img'>
                                <img src={airPods} alt="content" className="Pods" />
                            </div>
                            <div className='airpods_text'>
                                <p className='airpods_name'>Apple <br/>AirPods <br/> <strong>Max</strong></p>
                                <p>Computational audio. Listen, it's powerful</p>
                            </div>
                        </div>
                        {/* 에어팟 끝 */}

                        <div className='vision_pro'>
                            <div className='visionpro_img'>
                                <img src={visionPro} alt="content" className="visionPro" />
                            </div>
                            <div className='visionpro_text'>
                                <p className='visionpro_name'>Apple <br/>Vision <strong>Pro</strong></p>
                                <p>An immersive way to experience entertainment</p>
                            </div>
                        </div>
                        {/* 비전프로 끝 */}
                    </div>
                </div>

                {/* 오른쪽 맥북 컨트롤 */}
                <div className='flex_right'>
                    <div className='macbook'>
                        <div className='macbook_text'>
                            <p className='macbook_name'>Macbook <br/><strong>Air</strong></p>
                            <p>The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                            <ShowNowbk /> 
                            {/* 버튼전용 컴포넌트 */}
                        </div>
                        <div className='macbook_image'>
                            <img src={macbookAir} alt="content" className="mcbook" />
                        </div>
                    </div>
                </div>
            </div>
        </middle>
    );
};

export default Contents;