import type React from "react";
import { Button } from "./Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Slide } from "./Slide";
import { useState } from "react";
import { ProjectOverView } from "./ProjectOverview";

interface CarouselProps {
    data: any;
    isModal: boolean;
    handleProjectClick?: (project: any) => void;
}

export const Carousel: React.FC<CarouselProps> = ({data, isModal, handleProjectClick}) => {

    console.log(data)    

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        if(currentIndex === 0) {
            setCurrentIndex(data.length - 1)
        } else {
            setCurrentIndex(prev => prev - 1);
        }
        
    }

    const handleNextClick = () => {
         if(currentIndex === data.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(prev => prev + 1);
        }
    }

    return (
        <div className="flex gap-[10px] w-[100%] h-[100%] justify-center items-center">
            <Button backgroundColor="white" borderRadius={50} icon={ArrowLeft} color="black" classname="p-[10px]" handleClick={handlePrevClick}/>
            { data.map((slide: any, index: number) => {
                if(index !== currentIndex) return;
                
                return isModal ? 
                <div className="flex w-[100%] h-[100%] items-center justify-center" key={index}>
                    <Slide 
                        title={slide.title}
                        description={slide.description}
                        image={slide.image} 
                        switchLayout={ index === 0 || index % 2 === 0 ? true : false }
                    />
                </div> : 
                <div>
                    <ProjectOverView project = {slide} handleProjectClick = {handleProjectClick || (() => {})}/>
                </div>
                
            }) }
            <Button backgroundColor="white" borderRadius={50} icon={ArrowRight} color="black" classname="p-[10px]" handleClick={handleNextClick}/>
        </div>
    )
}