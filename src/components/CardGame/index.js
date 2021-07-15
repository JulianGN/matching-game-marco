import './style.css'; // só funciona com o vitejs

export default function CardGame(icon = 'logo-alura',alt = 'Logo da Alura'){
    return /*html*/`
        <article class="card-game">
            <img src="images/${icon}.png" alt="${alt}">
        </article>    
    `
}