const str = document.querySelector('#start');
const end = document.querySelector('#end');
const btn1 = document.querySelector('#bt1');
const btn2 = document.querySelector('#bt2');
const reset = document.querySelector('#reset');
const playto = document.querySelector('#playto');
let isGameOver = false;
let winningScore = 3;
let points1 = 0;
let points2 = 0;

btn1.addEventListener('click', () => {
    if (!isGameOver) {
        points1 += 1;
        str.textContent = points1;
        if (points1 === winningScore) {
            isGameOver = true;
            str.classList.add('has-text-success');
            end.classList.add('has-text-danger');
            btn1.disabled = true;
            btn2.disabled = true;
        }
    }
})

btn2.addEventListener('click', () => {
    if (!isGameOver) {
        points2 += 1;
        end.textContent = points2;
        if (points2 === winningScore) {
            isGameOver = true;
            end.classList.add('has-text-success');
            str.classList.add('has-text-danger');
            btn1.disabled = true;
            btn2.disabled = true;
        }
    }
})

reset.addEventListener('click', res)
function res() {
    isGameOver = false;
    points1 = 0;
    points2 = 0;
    str.textContent = points1;
    end.textContent = points2;
    str.classList.remove('has-text-success', 'has-text-danger');
    end.classList.remove('has-text-success', 'has-text-danger');
    btn1.disabled = false;
    btn2.disabled = false;
}
playto.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    res();
})


