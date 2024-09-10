
let boxes = document.querySelectorAll(".cells");
let reset = document.getElementById("reset");

let turno = true; 

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
        if (cell.innerText === "") { 
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
        title: `congratulation, ${cellA} wins!`,
        icon: 'success',
        confirmButtonText: 'OK'
    });
    
    return;
}
}
};

reset.addEventListener("click", () => {
    boxes.forEach((cell) => {
        cell.innerText = "";
    });
    turno = true; // 
});

