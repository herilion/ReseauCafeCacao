import { Carousel } from 'react-responsive-carousel';

export default function Slider() {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
            <div>
                <img src="/images/slide1.png" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="/images/logo.png" />
                <div>
                <p className>Legend 2</p>
                 <button>OK</button>
                </div>
            </div>
        </Carousel>
    )
}
