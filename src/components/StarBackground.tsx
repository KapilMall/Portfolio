import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState<any>([]);
    const [meteor, setMeteors] = useState<any>([]);
    
    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000) // did this so that number of stars generated are based on the size of the screen
        const newStars = [];

        for (let  i = 0; i < numberOfStars; i++) {       
        newStars.push({
            id: i,
            size: Math.random() * 3 + 1, // it will generate a star between 1 and 4 pixels
            x: Math.random() * 100, // x and y are the positions of the star
            y: Math.random() * 100,
            opacity: Math.random() * 0.5 + 0.5, // opacity between 50 and 100%
            animationDuration: Math.random() * 4 + 2 // setting animation duration between 2 to 6 seconds.
        }) 
        }

        setStars(newStars);
    }

    const genereateMeteors = () => {
        const numberOfMeteor = 5;
        const newMeteors = [];

        for (let  i = 0; i < numberOfMeteor; i++) {       
            newMeteors.push({
            id: i,
            size: Math.random() * 3 + 1, // it will generate a star between 1 and 4 pixels
            x: Math.random() * 100, // x and y are the positions of the star
            y: Math.random() * 100,
            delay: Math.random() * 15,
            animationDuration: Math.random() * 3 + 3 // setting animation duration between 3 to 6 seconds.
        }) 
        }

        setMeteors(newMeteors);
    }

    useEffect(() => {
        generateStars();
        genereateMeteors();

        // handle resize function so that it generates less clutter of stars on smallers screen like mobile on resizing...
        const handleResize = () => {
            generateStars();
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)

    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            { stars.map((star: any) => (
                <div 
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                      }}
                />
            ))}

            { meteor.map((meteor: any) => (
                <div 
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 50 + "px",
                        height: meteor.size * 2 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                      }}
                />
            ))}
        </div>
    )
}