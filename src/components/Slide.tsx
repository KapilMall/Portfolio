import { useEffect, useRef, useState } from "react"

interface SlideProps {
    title: string,
    description: string,
    image: string,
    switchLayout: boolean
}

export const Slide: React.FC<SlideProps> = ({ title, description, image, switchLayout }) => {

    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target)
                }
            },
            {
                threshold: 0.5
            }
        );
        if(divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if(divRef.current) {
                observer.unobserve(divRef.current);
            }
        }
    }, [])

    

  if(switchLayout) {
    return (
        <div
            ref={divRef} 
            className={`flex gap-[40px] h-[100%] items-center overflow-hidden`}
        >

            {/* image  */}
            <img 
                src={image} alt="image" className={`rounded-[10px] w-[20rem] h-[50%] bg-cover bg-no-repeat transition-all duration-500 ease-in ${ isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0' }`}
            />
            {/* Description  */}
            <div className={`flex flex-col gap-[15px] justify-center  transition-all duration-500 ease-in ${ isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} `}>
                <h2 className="text-3xl font-medium items-start">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
  } else {
     return (
        <div ref = {divRef} className="flex gap-[40px] h-[100%] items-center overflow-hidden">
            {/* Description  */}
            <div className={`flex flex-col gap-[15px] justify-center  transition-all duration-500 ease-in ${ isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} `}>
                <h2 className="items-star text-3xl font-medium">{title}</h2>
                <p>{description}</p>
            </div>
            {/* image  */}
            <img 
                src={image} alt="image" className={`rounded-[10px] w-[20rem] h-[50%] bg-cover bg-no-repeat transition-all duration-500 ease-in ${ isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0' }`}
            />
        </div>
    )
  }
} 