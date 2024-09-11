

let boxes = document.querySelectorAll(".cells");
let reset = document.getElementById("reset");

let turno = true; 
let gameOver = false; 

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (cell.innerText === "" && !gameOver) { 
            if (turno) {
                cell.innerText = "O";
                turno = false; 
            } else {
                cell.innerText = "X";
                turno = true;  
            }
            checkwinner();
        }
    });
});


const checkwinner = () => {
    for (let pattern of winpatterns) {
        const [a, b, c] = pattern;
        const cellA = boxes[a].innerText;
        const cellB = boxes[b].innerText;
        const cellC = boxes[c].innerText;

       
        if (cellA && cellA === cellB && cellA === cellC) {
            Swal.fire({
                title: `Congratulations, ${cellA} wins!`,
                icon: 'success',
                confirmButtonText: 'OK'
            });
            gameOver = true; 
            return;
        }
    }

   
    if ([...boxes].every(cell => cell.innerText !== "") && !gameOver) {
        Swal.fire({
            title: 'It\'s a draw!',
            icon: 'info',
            confirmButtonText: 'OK'
        });
        gameOver = true;
    }
};


reset.addEventListener("click", () => {
    boxes.forEach((cell) => {
        cell.innerText = ""; 
    });
    turno = true; 
    gameOver = false;
});
