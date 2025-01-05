let progress = document.getElementById('progress');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let numbers = document.querySelectorAll('.number');

let currentNumber = 1;
next.addEventListener('click', () => {
   currentNumber++;

     if(currentNumber> numbers.length){
        currentNumber = numbers.length;
     }
     update();
})

prev.addEventListener('click', () => {
   currentNumber--;

     if(currentNumber<1){
        currentNumber = 1;
     }
     update();
});

function update() {
    numbers.forEach((ele, indx)=> {
        if(currentNumber > indx) {
           ele.classList.add('active');
        }else {
              ele.classList.remove('active');
        }
    });
    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length -1)/(numbers.length-1))* 100 +'%'
    
    if(currentNumber === 1) {
        prev.disabled = true;
    }else if(currentNumber === 4) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

} ;
