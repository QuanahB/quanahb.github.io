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
        if(fourthCard != null){
            setTimeout(() => {changePhaseTwo(); }, 5002);
        }
    }
    else if(phaseTwo == true){
        tween.gotoAndStop(drop.currentFrame);
        secondCard = cardSelect(drop.currentFrame);
        drop.play();
        setTimeout(() => {drop.stop(); }, getRandomInt(2000,5001));
        //changePhaseThree();
        magic.interactive = false;
        hello.interactive = false;
        if(fifthCard != null){
            setTimeout(() => {changePhaseThree(); }, 5002);
        }
        
    }
    else if(phaseThree == true){
        move.gotoAndStop(drop.currentFrame);
        thirdCard = cardSelect(drop.currentFrame);
        if(sixthCard != null){
            endGame();
        }
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
        if(fourthCard != null){
            setTimeout(() => {changePhaseTwo(); }, 5002);
        }
    }
    else if(phaseTwo == true){
        tween.gotoAndStop(magic.currentFrame);
        secondCard = cardSelect(magic.currentFrame);
        magic.play();
        setTimeout(() => {magic.stop(); }, getRandomInt(2000,5001));
        //changePhaseThree();
        drop.interactive = false;
        hello.interactive = false;
        if(fifthCard != null){
            setTimeout(() => {changePhaseThree(); }, 5002);
        }
    }
    else if(phaseThree == true){
        move.gotoAndStop(magic.currentFrame);
        thirdCard = cardSelect(magic.currentFrame);
        if(sixthCard != null){
            endGame();
        }
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
        if(fourthCard != null){
            setTimeout(() => {changePhaseTwo(); }, 5002);
        }
    }
    else if(phaseTwo == true){
        tween.gotoAndStop(hello.currentFrame);
        secondCard = cardSelect(hello.currentFrame);
        hello.play();
        setTimeout(() => {hello.stop(); }, getRandomInt(2000,5001));
        //changePhaseThree();
        magic.interactive = false;
        drop.interactive = false;
        if(fifthCard != null){
            setTimeout(() => {changePhaseThree(); }, 5002);
        }
    }
    else if(phaseThree == true){
        move.gotoAndStop(hello.currentFrame);
        thirdCard = cardSelect(hello.currentFrame);
        if(sixthCard != null){
            endGame();
        }
    }

}

function changeImage4(){

    if(phaseOne == true){
        david.gotoAndStop(matt.currentFrame);
        fourthCard = cardSelect(matt.currentFrame);
        matt.play();
        setTimeout(() => {matt.stop(); }, getRandomInt(2000,5001));
        //changePhaseTwo();
        tom.interactive = false;
        simon.interactive = false;
        if(firstCard != null){
            setTimeout(() => {changePhaseTwo(); }, 5002);
        }
    }
    else if(phaseTwo == true){
        judas.gotoAndStop(matt.currentFrame);
        fifthCard = cardSelect(matt.currentFrame);
        matt.play();
        setTimeout(() => {matt.stop(); }, getRandomInt(2000,5001));
        //changePhaseThree();
        tom.interactive = false;
        simon.interactive = false;
        if(secondCard != null){
            setTimeout(() => {changePhaseThree(); }, 5002);
        }
        
    }
    else if(phaseThree == true){
        paul.gotoAndStop(matt.currentFrame);
        sixthCard = cardSelect(matt.currentFrame);
        if(thirdCard != null){
            endGame();
        }
    }

}

function changeImage5(){

    if(phaseOne == true){
        david.gotoAndStop(tom.currentFrame);
        fourthCard = cardSelect(tom.currentFrame);
        tom.play();
        setTimeout(() => {tom.stop(); }, getRandomInt(2000,5001));
        //changePhaseTwo();
        matt.interactive = false;
        simon.interactive = false;
        if(firstCard != null){
            setTimeout(() => {changePhaseTwo(); }, 5002);
        }
    }
    else if(phaseTwo == true){
        judas.gotoAndStop(tom.currentFrame);
        fifthCard = cardSelect(tom.currentFrame);
        tom.play();
        setTimeout(() => {tom.stop(); }, getRandomInt(2000,5001));
        //changePhaseThree();
        matt.interactive = false;
        simon.interactive = false;
        if(secondCard != null){
            setTimeout(() => {changePhaseThree(); }, 5002);
        }
        
    }
    else if(phaseThree == true){
        paul.gotoAndStop(tom.currentFrame);
        sixthCard = cardSelect(tom.currentFrame);
        if(thirdCard != null){
            endGame();
        }
    }

}

function changeImage6(){

    if(phaseOne == true){
        david.gotoAndStop(simon.currentFrame);
        fourthCard = cardSelect(simon.currentFrame);
        simon.play();
        setTimeout(() => {simon.stop(); }, getRandomInt(2000,5001));
        //changePhaseTwo();
        matt.interactive = false;
        tom.interactive = false;
        if(firstCard != null){
            setTimeout(() => {changePhaseTwo(); }, 5002);
        }
    }
    else if(phaseTwo == true){
        judas.gotoAndStop(simon.currentFrame);
        fifthCard = cardSelect(simon.currentFrame);
        simon.play();
        setTimeout(() => {simon.stop(); }, getRandomInt(2000,5001));
        //changePhaseThree();
        matt.interactive = false;
        tom.interactive = false;
        if(secondCard != null){
            setTimeout(() => {changePhaseThree(); }, 5002);
        }
        
    }
    else if(phaseThree == true){
        paul.gotoAndStop(simon.currentFrame);
        sixthCard = cardSelect(simon.currentFrame);
        if(thirdCard != null){
            endGame();
        }
    }

}

