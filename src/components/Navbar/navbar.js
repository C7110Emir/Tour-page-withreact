import React from 'react'
import style from "./navbar.module.css"

function Navbar() {
    return (
        <div>
        <div className={style.navbardiv}>
            <div className={style.aboutus}>
                <a href="#">About Us</a>

            </div>
            <div className={style.foryou}>
                <a href="#">For You</a>
            </div>
            <div className={style.services}>
                <a href="#">Services</a>
            </div>
            <div className={style.blog}>
                <a href="#">Blog</a>
            </div>
            <div className={style.vlog}>
                <a href="#">Vlog</a>
            </div>
            <div className={style.contact}>
                <a href="#">Contact</a>
            </div>  

            
        </div>
        <div className={style.tourplacesheader}>
            <h2>Popular Tour Places</h2>
        </div>
        </div>
        
    )
}

export default Navbar;