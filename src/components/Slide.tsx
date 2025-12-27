interface SlideProps {
    title: string,
    description: string,
    image: string,
    switchLayout: boolean
}

export const Slide: React.FC<SlideProps> = ({ title, description, image, switchLayout }) => {
  if(switchLayout) {
    return (
        <div className="flex gap-[10px]">
            {/* image  */}
            <img 
                src={image} alt="image"
            />
            {/* Description  */}
            <div className="flex flex-col gap-[15px]">
                <h3 className="items-start">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
  } else {
     return (
        <div className="flex gap-[10px]">
            {/* Description  */}
            <div className="flex flex-col gap-[15px]">
                <h3 className="items-start">{title}</h3>
                <p>{description}</p>
            </div>
            {/* image  */}
            <img 
                src={image} alt="image"
            />
        </div>
    )
  }
}