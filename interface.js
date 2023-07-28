document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });

});

function handleClick(event) {
    var resultado = document.querySelector('h2');
    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        setTimeout(()=>{
            if(playerTime == 0){
                resultado.innerHTML = `O vencedor foi ${player[0]}⚔️`
            } else{
                resultado.innerHTML = `O vencedor foi ${player[1]}🛡️`
            };
        }, 10);
    } else if(checkTie()){
        resultado.innerHTML = 'Deu velha!!'
    }
    updateSquares();
}

function updateSquares() {
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    });
};

function checkTie(){
    for(let i = 0; i < board.length; i++){
        if(board[i] == ''){
            return false;
        };
    }
    return true;
}