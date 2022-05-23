let cellsArray = [
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];
let newArray = [
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
];

function checkArray() {
    let vecinosVivos = 0;

    for (let i = 1; i < cellsArray.length - 1; i++) {
        for (let j = 1; j < cellsArray.length - 1; j++) {
            vecinosVivos = 0;

            // Esquina izquierda-arriba

            if (i === 0 && j === 0) {
                // vecino posterior
                if (cellsArray[i][j + 1] === 1) {
                    vecinosVivos++;
                }

                // vecino posterior abajo
                if (cellsArray[i + 1][j + 1] === 1) {
                    vecinosVivos++;
                }
                // vecino de abajo
                if (cellsArray[i][j + 1] === 1) {
                    vecinosVivos++;
                }

                // Esquina derecha-arriba
            } else if (i === 0 && j === 4) {
                // vecino anterior
                if (cellsArray[i][j - 1] === 1) {
                    vecinosVivos++;
                }
                // vecino abajo anterior
                if (cellsArray[i + 1][j - 1] === 1) {
                    vecinosVivos++;
                }
                // vecino de abajo
                if (cellsArray[i + 1][j] === 1) {
                    vecinosVivos++;
                }

                // Esquina inferior-izquierda
            } else if (i === 4 && j === 0) {
                // vecino arriba
                if (cellsArray[i - 1][j] === 1) {
                    vecinosVivos++;
                }
                // vecino arriba posterior
                if (cellsArray[i - 1][j + 1] === 1) {
                    vecinosVivos++;
                }
                // vecino posterior
                if (cellsArray[i][j + 1] === 1) {
                    vecinosVivos++;
                }

                // Esquina inferior-derecha
            } else if (i === 4 && j === 4) {
                // vecino arriba
                if (cellsArray[i - 1][j] === 1) {
                    vecinosVivos++;
                }
                // vecino arriba anterior
                if (cellsArray[i - 1][j - 1] === 1) {
                    vecinosVivos++;
                }
                // vecino abajo anterior
                if (cellsArray[i][j - 1] === 1) {
                    vecinosVivos++;
                }

                // Banda superior //
            } else if (i === 0 && cellsArray.length && j !== 0) {
                // vecino anterior
                if (cellsArray[i][j - 1] === 1) {
                    vecinosVivos++;
                }
                // vecino abajo anterior
                if (cellsArray[i + 1][j - 1] === 1) {
                    vecinosVivos++;
                }
                // vecino abajo
                if (cellsArray[i][j] === 1) {
                    vecinosVivos++;
                }
                //  vecino abajo posterior
                if (cellsArray[i + 1][j + 1] === 1) {
                    vecinosVivos++;
                }
                // vecino posterior
                if (cellsArray[i][j + 1] === 1) {
                    vecinosVivos++;
                }
                // Banda inferior //
            } else if (i === cellsArray.length && j !== 4) {
                // vecino anterior
                if (cellsArray[i][j - 1] === 1) {
                    vecinosVivos++;
                }
                // vecino arriba anterior
                if (cellsArray[i - 1][j - 1] === 1) {
                    vecinosVivos++;
                }
                //  vecino arriba
                if (cellsArray[i - 1][j] === 1) {
                    vecinosVivos++;
                }
                // vecino  arriba posterior
                if (cellsArray[i - 1][j + 1] === 1) {
                    vecinosVivos++;
                }
                // vecino posterior
                if (cellsArray[i][j + 1] === 1) {
                    vecinosVivos++;
                }
                // Banda lateral Izquierda
            } else if (i !== 0 && i !== cellsArray.length - 1 && j === 0) {
                // vecino arriba
                if (cellsArray[i - 1][j] === 1) {
                    vecinosVivos++;
                }
                // vecino arriba posterior
                if (cellsArray[i - 1][j + 1] === 1) {
                    vecinosVivos++;
                }
                //  vecino posterior
                if (cellsArray[i][j + 1] === 1) {
                    vecinosVivos++;
                }
                // vecino  abajo posterior
                if (cellsArray[i + 1][j + 1] === 1) {
                    vecinosVivos++;
                }
                // vecino abajo
                if (cellsArray[i + 1][j] === 1) {
                    vecinosVivos++;
                }
                // Banda lateral Derecha
            } else if (
                i !== 0 &&
                i !== cellsArray.length - 1 &&
                cellsArray.length &&
                j === 4
            ) {
                // vecino arriba
                if (cellsArray[i - 1][j] === 1) {
                    vecinosVivos++;
                }
                // vecino arriba anterior
                if (cellsArray[i - 1][j - 1] === 1) {
                    vecinosVivos++;
                }
                //  vecino anterior
                if (cellsArray[i][j - 1] === 1) {
                    vecinosVivos++;
                }
                // vecino  abajo anterior
                if (cellsArray[i + 1][j - 1] === 1) {
                    vecinosVivos++;
                }
                // vecino abajo
                if (cellsArray[i + 1][j] === 1) {
                    vecinosVivos++;
                }
                // anterior arriba
            }else (cellsArray[i]) {
                if (cellsArray[j - 1][i - 1] === 1) {
                    vecinosVivos++;
                }
            
            // vecino arriba
            if (cellsArray[j][i - 1] === 1) {
                vecinosVivos++;
            }

            // vecino arriba posterior
            if (cellsArray[j + 1][i - 1] === 1) {
                vecinosVivos++;
            }

            // vecino posterior
            if (cellsArray[i][j + 1] === 1) {
                vecinosVivos++;
            }
            // vecino anterior
            if (cellsArray[i][j - 1] === 1) {
                vecinosVivos++;
            }
            // vecino anterior abajo
            if (cellsArray[i + 1][j - 1] === 1) {
                vecinosVivos++;
            }
            // vecino de abajo
            if (cellsArray[i + 1][j] === 1) {
                vecinosVivos++;
            }
            // vecino posterior abajo
            if (cellsArray[i + 1][j + 1] === 1) {
                vecinosVivos++;
            }
            // Aquí hemos terminado de contar los vecinos vivos

            if (vecinosVivos < 2 || vecinosVivos > 3) {
                newArray[i][j] = 0;
            }

            if (vecinosVivos === 2 || vecinosVivos === 3) {
                newArray[i][j] = 1;
            }
        }

            // ------------------------------//
        }
    }
    return vecinosVivos;
}
let vecinosVivos = checkArray(cellsArray);
console.log(vecinosVivos);

