import React from 'react'
import Navbar from "./Navbar/navbar"
import style from "./fullpage.module.css"
import Contentcards from "./Contents/Contentcards"

function Fullpage() {
    return (
        <div>
            <Navbar/>
            <div>
                <Contentcards/>
            </div>
        </div>
    )
}

export default  Fullpage