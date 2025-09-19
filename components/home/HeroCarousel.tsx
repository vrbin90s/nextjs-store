import hero1 from '@/public/images/hero-1.jpg';
import hero2 from '@/public/images/hero-2.jpg';
import hero3 from '@/public/images/hero-3.jpg';
import hero4 from '@/public/images/hero-4.jpg';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

const carouselImages = [ hero1, hero2, hero3, hero4 ];

const HeroCarousel = () => {
  return ( 
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          { carouselImages.length > 0 && carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card className="py-0">
                  <CardContent className="p-2">
                    <Image src={ image } alt="hero" className="w-full h-[24rem] rounded-md object-cover"/>
                  </CardContent>
                </Card>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer"/>
        <CarouselNext className="cursor-pointer"/>
      </Carousel>
    </div> 
  );
}
 
export default HeroCarousel;