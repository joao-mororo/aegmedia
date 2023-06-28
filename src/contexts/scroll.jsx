import { createContext, useRef } from "react";

export const ScrollContext = createContext()

export default function ScrollProvider({children}) {
    const homeRef = useRef(null)
    const servicesRef = useRef(null)
    const commentsRef = useRef(null)
    const authorityRef = useRef(null)
    const contactRef = useRef(null)

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    
    return (
        <ScrollContext.Provider
            value={{scrollToSection, homeRef, servicesRef, commentsRef, authorityRef, contactRef}}
        >
            {children}
        </ScrollContext.Provider>
    )
}