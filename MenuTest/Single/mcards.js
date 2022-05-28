//Math Card Object 
function mathCard(num,operation){

    this.num = num;
    if (operation == "add" || operation == "sub" || operation == "div" || operation == "mul"){
        this.operation = operation;
    }
    else{
        console.log("Incorrect Operation type");
    }

}

const addOne = new mathCard(1,"add");
const addTwo = new mathCard(2,"add");
const addThree = new mathCard(3,"add");

const subOne = new mathCard(1,"sub");
const subTwo = new mathCard(2,"sub");
const subThree = new mathCard(3,"sub");

const divOne = new mathCard(1,"div");
const divTwo = new mathCard(2,"div");
const divThree = new mathCard(3,"div");

const mulOne = new mathCard(1,"mul");
const mulTwo = new mathCard(2,"mul");
const mulThree = new mathCard(3,"mul");

//Function that binds card sprite/frame to a card 
function cardSelect(currentFrame){

    if (currentFrame == 0){
        return addOne;
    }

    if (currentFrame == 1){
        return addTwo;
    }

    if (currentFrame == 2){
        return addThree;
    }

    if (currentFrame == 3){
        return subOne;
    }

    if (currentFrame == 4){
        return subTwo;
    }

    if (currentFrame == 5){
        return subThree;
    }

    if (currentFrame == 6){
        return divOne;
    }

    if (currentFrame == 7){
        return divTwo;
    }

    if (currentFrame == 8){
        return divThree;
    }

    if (currentFrame == 9){
        return mulOne;
    }

    if (currentFrame == 10){
        return mulTwo;
    }

    if (currentFrame == 11){
        return mulThree;
    }

}

//CHANGE IMAGE FOR SELECTED CARD
function changeImage1(){

    if(phaseOne == true){
        ani.gotoAndStop(drop.currentFrame);
        firstCard = cardSelect(drop.currentFrame);
        drop.play();
        setTimeout(() => {drop.stop(); }, getRandomInt(2000,5001));
        //changePhaseTwo();
        magic.interactive = false;
        hello.interactive = false;
        setTimeout(() => {changePhaseTwo(); }, 5002);
    }
    else if(phaseTwo == true){
        tween.gotoAndStop(drop.currentFrame);
        secondCard = cardSelect(drop.currentFrame);
        drop.play();
        setTimeout(() => {drop.stop(); }, getRandomInt(2000,5001));
        //changePhaseThree();
        magic.interactive = false;
        hello.interactive = false;
        setTimeout(() => {changePhaseThree(); }, 5002);
        
    }
    else if(phaseThree == true){
        move.gotoAndStop(drop.currentFrame);
        thirdCard = cardSelect(drop.currentFrame);
        endGame();
    }

}

function changeImage2(){

    if(phaseOne == true){
        ani.gotoAndStop(magic.currentFrame);
        firstCard = cardSelect(magic.currentFrame);
        magic.play();
        setTimeout(() => {magic.stop(); }, getRandomInt(2000,5001));
        //changePhaseTwo();
        drop.interactive = false;
        hello.interactive = false;
        setTimeout(() => {changePhaseTwo(); }, 5002);
    }
    else if(phaseTwo == true){
        tween.gotoAndStop(magic.currentFrame);
        secondCard = cardSelect(magic.currentFrame);
        magic.play();
        setTimeout(() => {magic.stop(); }, getRandomInt(2000,5001));
        //changePhaseThree();
        drop.interactive = false;
        hello.interactive = false;
        setTimeout(() => {changePhaseThree(); }, 5002);
    }
    else if(phaseThree == true){
        move.gotoAndStop(magic.currentFrame);
        thirdCard = cardSelect(magic.currentFrame);
        endGame();
    }

}

function changeImage3(){

    if(phaseOne == true){
        ani.gotoAndStop(hello.currentFrame);
        firstCard = cardSelect(hello.currentFrame);
        hello.play();
        setTimeout(() => {hello.stop(); }, getRandomInt(2000,5001));
        //changePhaseTwo();
        magic.interactive = false;
        drop.interactive = false;
        setTimeout(() => {changePhaseTwo(); }, 5002);
    }
    else if(phaseTwo == true){
        tween.gotoAndStop(hello.currentFrame);
        secondCard = cardSelect(hello.currentFrame);
        hello.play();
        setTimeout(() => {hello.stop(); }, getRandomInt(2000,5001));
        //changePhaseThree();
        magic.interactive = false;
        drop.interactive = false;
        setTimeout(() => {changePhaseThree(); }, 5002);
    }
    else if(phaseThree == true){
        move.gotoAndStop(hello.currentFrame);
        thirdCard = cardSelect(hello.currentFrame);
        endGame();
    }

}

