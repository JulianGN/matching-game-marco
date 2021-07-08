import './src/styles/settings/colors.css'; // estrutura de pastas do itcss (settings, etc: https://developer.helpscout.com/seed/glossary/itcss/)
import './src/styles/generic/reset.css'; // reset padrão do Eric Meyers
import './src/styles/elements/base.css';

import CardGame from './src/components/CardGame';
import PlayerTitle from './src/components/PlayersTitle'

const $root = document.querySelector('#root');
let $htmlCardGame = CardGame();
const $players = PlayerTitle(1) + PlayerTitle(2)

for(let i = 0; i<5;i++){
    $htmlCardGame += CardGame() // podemos concatenar porque o CardGame retorna uma string
}

$root.insertAdjacentHTML('beforebegin',$players);
$root.insertAdjacentHTML('afterbegin',$htmlCardGame);

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('click',() => {
        card.classList.toggle('active')
    })
})