import './src/styles/settings/colors.css'; // estrutura de pastas do itcss (settings, etc)
import './src/styles/generic/reset.css'; // reset padrão do Eric Meyers
import './src/styles/elements/base.css';

import CardGame from './src/components/CardGame';

const $root = document.querySelector('#root');
const $htmlCardGame = CardGame() + CardGame(); // podemos concatenar porque o CardGame retorna uma string

$root.insertAdjacentHTML('afterbegin',$htmlCardGame);

