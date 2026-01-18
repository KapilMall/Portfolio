import type React from "react";
import { Button } from "./Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Slide } from "./Slide";
import { useEffect, useState } from "react";
import { ProjectOverView } from "./ProjectOverview";

interface CarouselProps {
    data: any;
    isModal: boolean;
    handleProjectClick?: (project: any) => void;
}

export const Carousel: React.FC<CarouselProps> = ({data, isModal, handleProjectClick}) => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const [projectPerPage, setProjectPerPage] = useState(3); // state to decide the number of projects we want to show in a carousel at a time.
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
         if (isModal) return; // if isModal then skip the whole resize thing

         const handleResize = () => {
            if(window.innerWidth < 640) {
                setProjectPerPage(1);
            } else if (window.innerWidth < 1024) {
                setProjectPerPage(2);
            } else {
                setProjectPerPage(3);
            }
         }

         handleResize();
         window.addEventListener('resize', handleResize);

         return () => window.removeEventListener('resize', handleResize)
    }, [isModal])

    const handlePrevClick = () => {

        if (isAnimating) return;

        setDirection('left');
        setIsAnimating(true);

       setTimeout(() => {
        if(isModal) {
            if(currentIndex === 0) {
                setCurrentIndex(data.length - 1)
            } else {
                setCurrentIndex(prev => prev - 1);
            }
        } else {
            if(currentIndex === 0) {
                setCurrentIndex(data.length - projectPerPage)
            } else {
                setCurrentIndex(prev => prev - 1)
            }
        }
        setIsAnimating(false);
       }, 500)
        
    }

    const handleNextClick = () => {
        if (isAnimating) return;
        
        setDirection('right');
        setIsAnimating(true);

        setTimeout(() => {
            if(isModal) {
                if(currentIndex === data.length - 1) {
                    setCurrentIndex(0)
                } else {
                    setCurrentIndex(prev => prev + 1);
                }
                } else {
                if(currentIndex + projectPerPage >= data.length) {
                    setCurrentIndex(0)
                } else {
                    setCurrentIndex(prev => prev + 1)
                }
            }
            setIsAnimating(false);
        }, 500)
    }

    return (
        <div className="flex gap-[20px] w-[100%] h-[450px] justify-center items-center">
            <Button backgroundColor="white" borderRadius={50} icon={ArrowLeft} color="black" classname="p-[10px]" handleClick={handlePrevClick}/>

            <div className="flex-1 h-full overflow-hidden relative">
                <div
                    className={`flex gap-4 h-full transition-all duration-500 ease-in-out ${
                        isAnimating 
                            ? direction === 'right' 
                                ? '-translate-x-8 opacity-0' 
                                : 'translate-x-8 opacity-0'
                            : 'translate-x-0 opacity-100'
                    }`}
                >
                    {
                        isModal ?
                        //  Modal: Show one slide at a time (original behavior)
                        (
                            data.map((slide: any, index: number) => {
                                if(index !== currentIndex) return;
                            
                                
                                return (
                                    <div className="flex w-[100%] h-[100%] items-center justify-center" key={index}>
                                        <Slide 
                                            title={slide.title}
                                            description={slide.description}
                                            image={slide.image} 
                                            switchLayout={ index === 0 || index % 2 === 0 ? true : false }
                                        />
                                    </div>
                                ) 
                                
                            })
                        ) : 
                            //Project Overview: Show projects based on the number of projects set on projectsPerPage state in the carousel.
                        (
                            data.slice(currentIndex, currentIndex + projectPerPage).map((project:any, index:any) => {
                                return (
                                    <div 
                                        className="flex-1 h-full animate-in fade-in zoom-in-95 duration-500" 
                                        key={`${currentIndex}-${index}`} 
                                        style={{
                                            animationDelay: `${index * 100}ms`,
                                            animationFillMode: 'backwards'
                                        }}
                                    >
                                        <ProjectOverView index={index} project = {project} handleProjectClick = {handleProjectClick || (() => {})}/>
                                    </div>
                                )
                            })
                        )
                    }

                </div>
            </div>
                
            <Button backgroundColor="white" borderRadius={50} icon={ArrowRight} color="black" classname="p-[10px]" handleClick={handleNextClick}/>
        </div>
    )
}