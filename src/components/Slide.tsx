interface SlideProps {
    title: string,
    description: string,
    image: string,
    switchLayout: boolean
}

export const Slide: React.FC<SlideProps> = ({ title, description, image, switchLayout }) => {
  if(switchLayout) {
    return (
        <div className="flex gap-[40px] h-[100%]">
            {/* image  */}
            <img 
                src={image} alt="image" className="rounded-[10px] w-[20rem] bg-cover bg-no-repeat"
            />
            {/* Description  */}
            <div className="flex flex-col gap-[15px] justify-center">
                <h2 className="text-3xl font-medium items-start">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
  } else {
     return (
        <div className="flex gap-[40px] h-[100%]">
            {/* Description  */}
            <div className="flex flex-col gap-[15px] justify-center">
                <h2 className="items-star text-3xl font-medium">{title}</h2>
                <p>{description}</p>
            </div>
            {/* image  */}
            <img 
                src={image} alt="image" className="rounded-[10px] w-[20rem] bg-cover bg-no-repeat"
            />
        </div>
    )
  }
}