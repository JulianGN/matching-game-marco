// Objects são componentes estruturais
import './style.css'
// import CardGame from "../../components/CardGame";
import CardFrontBack from '../../components/CardFrontBack'

export default function BoardGame(amountCards){
    // const cards = [];
    // while(amountCards > cards.length){
    //     cards.push(CardGame());
    // }
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlBoardGame = $htmlCardFrontBack.repeat(amountCards)

    return /*html*/`
    <section class="board-game">
        ${$htmlBoardGame}
    </section>
    `
}