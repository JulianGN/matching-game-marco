import CardGame from "../CardGame";
import './style.css'

export default function CardFrontBack(){
    return /*html*/`
        <article class="card-front-back">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame('logo-js','Logo do JavaScript')}
            </div>
        </article>
    `
}