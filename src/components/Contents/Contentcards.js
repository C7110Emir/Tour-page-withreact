import React from 'react'
import style from "./Contentcard.module.css"
import data from "../data.js"


function Contentcards() {
    return (
        data.map((element) =>
            <div className={style.container}>
                <div className={style.card}>
                    <div className={style.classtitle}>

                    </div>
                    <div className={style.cardbody}>
                        <div className={style.image}>

                        </div>
                        <div className={style.desc}>

                        </div>
                    </div>
                </div>
                
            </div>
        )
    )
}

export default Contentcards;