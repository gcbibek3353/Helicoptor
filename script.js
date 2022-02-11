const startscreen = document.querySelector('.startscreen');
const mainarea = document.querySelector('.mainarea');
const result = document.querySelector('.result');
const score = document.querySelector('#score');
var src = 0;


startscreen.addEventListener('click', gamestart);

function gamestart() {
    result.style.display='none';
    startscreen.style.display = 'none';
    
    // Creating Helicoptor 
    var helicoptor = document.createElement('div');
    var wing = document.createElement('img');
    var helicoptorimg = document.createElement('img');
    wing.src = "wing.png";
    helicoptorimg.src = "helicoptor.png";
    helicoptor.classList.add('helicoptor');
    wing.classList.add('wing');
    helicoptorimg.classList.add('helicoptorimg');
    mainarea.appendChild(helicoptor);
    helicoptor.appendChild(wing);
    helicoptor.appendChild(helicoptorimg);

    // Moving Helocoptor 
    var helicoptorleft = helicoptor.offsetLeft;
    var helicoptortop = helicoptor.offsetTop;
    var helicoptorspeed = 10;
    document.addEventListener('keydown', function (e) {
        if (e.keyCode == 37 && helicoptorleft>10) {
                helicoptorimg.src = "helicoptorleft.png"
                helicoptorleft -= helicoptorspeed;
                helicoptor.style.left = helicoptorleft + 'px';
            }
            if (e.keyCode == 39 && helicoptorleft < 1200) {
            wing.src="wing.png"
            helicoptorimg.src = "helicoptor.png"
            helicoptorleft += helicoptorspeed;
            helicoptor.style.left = helicoptorleft + 'px';
        }
        if (e.keyCode == 38 && helicoptortop>50) {
            helicoptortop -= helicoptorspeed;
            helicoptor.style.top = helicoptortop + 'px';
        }
        if (e.keyCode == 40 && helicoptortop< 530) {
            helicoptortop += helicoptorspeed;
            helicoptor.style.top = helicoptortop + 'px';
        }
    })
     
    // Creating Block 
    var block = document.createElement('div');
    block.classList.add('block');
    mainarea.appendChild(block);
    setInterval(() => {
        var random = Math.floor((Math.random() * 200) + 60)
        block.style.top = random + 'px';
        blocktop = block.offsetTop
        scr++;
    }, 5000);

    // collison 
    setInterval(() => {
        var helicoptorleft1 = parseInt(window.getComputedStyle(helicoptor).getPropertyValue('left'));
        var helicoptortop1 = parseInt(window.getComputedStyle(helicoptor).getPropertyValue('top'));
        var blockleft1 = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
        var blocktop1 = parseInt(window.getComputedStyle(block).getPropertyValue('top'));

        if((helicoptorleft1 + 100 > blockleft1)&&(helicoptorleft1 < blockleft1+100) 
            && (helicoptortop1+100>blocktop1)&&(helicoptortop1<blocktop1+350) ){
                block.style.display='none';
                helicoptor.style.display='none';
                result.style.display='flex';
                mainarea.appendChild(result);
                score.innerHTML=`Score:${scr}`
            }
    }, 10);
}

