import React from 'react'
import {useState, useEffect} from "react"

// Icons
import {MdOutlineKeyboardArrowUp} from "react-icons/md"

const BackToTopBtn = () => {

    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            setBackToTopBtn(true)
        } else {
            setBackToTopBtn(false)
        }
    })
    }, [])

    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    

  return (

    <div className='fixed bottom-[50px] right-8'>
        {backToTopBtn && (<button className='p-4' onClick={ScrollUp}><MdOutlineKeyboardArrowUp size={30}/></button>)}
    </div>
  )
}

export default BackToTopBtn