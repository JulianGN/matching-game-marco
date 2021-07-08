import './style.css'; // só funciona com o vitejs

export default function CardGame(){
    return /*html*/`
    <section class="card">
        <article class="card-game">
            <img src="images/alura-pixel.svg" alt="Logo da Alura">
        </article>
        <article class="card-game">
            <img src="images/logo-javascript.png" alt="Logo JavaScript">
        </article>        
    </section>
    `
}