let container = document.getElementById('container');
let dice = [];


class Die {
    constructor() {
        this.div = document.createElement('div')
        this.div.classList.add('die');
        container.appendChild(this.div);
        this.div.addEventListener('click', () => {
            this.roll()
        });
        this.div.addEventListener('dblclick', () => {
            this.removeDie();
        });
        this.roll();


    }
    roll() {
        let randomNumber = Math.ceil(Math.random() * 6);
        this.value = randomNumber;
        this.getChar();
        
    }

    removeDie() {
        this.div.remove();
    }

    getChar() {
        if (this.value === 1) {
            this.div.style.backgroundImage = "url('1.png')"
        }
        else if (this.value === 2) {
            this.div.style.backgroundImage = "url('2.png')"
        }
        else if (this.value === 3) {
            this.div.style.backgroundImage = "url('3.png')"
        }
        else if (this.value === 4) {
            this.div.style.backgroundImage = "url('4.png')"
        }
        else if (this.value === 5) {
            this.div.style.backgroundImage = "url('5.png')"
        }
        
        else  {
            this.div.style.backgroundImage = "url('6.png')"
        }
    }
}

let genBtn = document.getElementById('generate');
genBtn.addEventListener('click', () => {
    console.log('generate die');
    let newDie = new Die();
    dice.push(newDie);
})

let rollBtn = document.getElementById('roll');
rollBtn.addEventListener('click', () => {
    
    for (let i = 0; i < dice.length; i++) {
        console.log(dice[i]);
        dice[i].roll();
        
    }
    
})







