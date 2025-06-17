'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay,Pagination, Navigation } from 'swiper/modules';


type Screenshots = {
  id:number;
  image:string;
}

function ScreenshotSlider ({screenshots} :{screenshots : Screenshots[]} ) {

  
  return (
<div className='container mx-auto '>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {screenshots.map((screenshot)=> (
        <SwiperSlide key={screenshot.id}>
          <img
          className='w-full h-96 object-cover'
          src={screenshot.image}
          alt={`Screenshot ${screenshot.id}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
</div>
  )
}

export default ScreenshotSlider