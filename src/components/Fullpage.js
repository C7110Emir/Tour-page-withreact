import React from 'react'
import Navbar from "./Navbar/navbar"
import style from "./fullpage.module.css"
import Contentcards from "./Contents/Contentcards"
import Cards from './Contents/cards'

function Fullpage() {
    return (
        <div>
            <Navbar/>
            <div className={style.flexdesign}>
                <Cards/>
            </div>
        </div>
    )
}

export default  Fullpage