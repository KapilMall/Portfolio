import type React from "react";
import { Button } from "./Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Slide } from "./Slide";

interface CarouselProps {
    data: [];
}

export const Carousel: React.FC<CarouselProps> = ({data}) => {
    return (
        <div>
            <Button backgroundColor="white" borderRadius={50} icon={ArrowLeft} color="black"/>
            { data.map((slide, index) => {
                return (
                    <Slide 
                        title="Image Title" 
                        description="Always capitalize the destructured prop name (icon: Icon) so React treats it as a component
                                    Use Omit<LucideProps, 'ref'> if you want to allow icon customization but avoid ref conflicts" 
                        image="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_1300/q_auto/f_auto/hiking_dog_mountain" 
                        switchLayout={ index === 0 || index % 2 === 0 ? true : false }
                    />
                )
            }) }
            <Button backgroundColor="white" borderRadius={50} icon={ArrowRight} color="black"/>
        </div>
    )
}