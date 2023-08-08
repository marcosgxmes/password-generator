import geraPass from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaractere = document.querySelector('.qtd-caractere');
const checkMaisculas = document.querySelector('.check-maisculas');
const checkMinusculas = document.querySelector('.check-minusculas');
const checkNumeros = document.querySelector('.check-numeros');
const checkSimbolos  = document.querySelector('.check-simbolos');
const btnGeraPass = document.querySelector('.gerar-senha')


export default () => {
    btnGeraPass.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    });
};

function gera() {
    const senha = geraPass(
        qtdCaractere.value,
        checkMaisculas.checked,
        checkMinusculas.checked,
        checkNumeros.checked,
        checkSimbolos.checked
    );

    return senha || 'Nada Selecionado.';
}