function changePhaseOne(){
    firstDie = drag.currentFrame;
    phaseOne = true;
    phaseTwo = false;
    phaseThree = false;

    line10.text = "Phase 1";
}

function changePhaseTwo(){

    //oppCardOne = selectPhaseOne(enemyCardOne,enemyCardTwo,enemyCardThree);
    selectPhaseOne();

    if(drop.playing == false){
        magic.interactive = true;
        hello.interactive = true;
    }
    if(magic.playing == false){
        drop.interactive = true;
        hello.interactive = true;
    }
    if(hello.playing == false){
        drop.interactive = true;
        magic.interactive = true;
    }
    console.log("Select Next Card");
    phaseOne = false;
    phaseTwo = true;
    phaseThree = false;

    line10.text = "Phase 2";
    
}

function changePhaseThree(){

    //oppCardTwo = selectPhaseTwo();
    selectPhaseTwo();

    drip.visible = true;
    drip.play();
    drip.animationSpeed = 0.2;
    setTimeout(() => {drip.stop(); }, getRandomInt(2000,5001));


    if(drop.playing == false){
        magic.interactive = true;
        hello.interactive = true;
    }
    if(magic.playing == false){
        drop.interactive = true;
        hello.interactive = true;
    }
    if(hello.playing == false){
        drop.interactive = true;
        magic.interactive = true;
    }
    console.log("Select Next Card");
    phaseOne = false;
    phaseTwo = false;
    phaseThree = true;

    line10.text = "Phase 3";

}

function endGame(){

    //oppCardThree = selectPhaseThree();
    selectPhaseThree();

    drop.interactive = false;
    magic.interactive = false;
    hello.interactive = false;

    let finalScore = 0;
    let oppScore = 0;
    secondDie = drip.currentFrame
    finalScore = (finalScore + (firstDie + 1) + Math.abs(firstCard.num));
    oppScore = (oppScore + (firstDie + 1) + Math.abs(oppCardOne.num));
    console.log(finalScore);

    //Second round
    if(secondCard.operation == "add"){
        finalScore = (finalScore + secondCard.num);
    }
    else if(secondCard.operation == "sub"){
        finalScore = (finalScore - secondCard.num);
    }
    else if(secondCard.operation == "div"){
        finalScore = (finalScore/secondCard.num);
    }
    else if(secondCard.operation == "mul"){
        finalScore = (finalScore * secondCard.num)
    }

    if(oppCardTwo.operation == "add"){
        oppScore = (oppScore + oppCardTwo.num);
    }
    else if(oppCardTwo.operation == "sub"){
        oppScore = (oppScore - oppCardTwo.num);
    }
    else if(oppCardTwo.operation == "div"){
        oppScore = (oppScore/oppCardTwo.num);
    }
    else if(oppCardTwo.operation == "mul"){
        oppScore = (oppScore * oppCardTwo.num)
    }

    console.log(finalScore);

    //Third Round
    if(thirdCard.operation == "add"){
        finalScore = (finalScore + thirdCard.num);
    }
    else if(thirdCard.operation == "sub"){
        finalScore = (finalScore - thirdCard.num);
    }
    else if(thirdCard.operation == "div"){
        finalScore = (finalScore/thirdCard.num);
    }
    else if(thirdCard.operation == "mul"){
        finalScore = (finalScore * thirdCard.num);
    }

    if(oppCardThree.operation == "add"){
        oppScore = (oppScore + oppCardThree.num);
    }
    else if(oppCardThree.operation == "sub"){
        oppScore = (oppScore - oppCardThree.num);
    }
    else if(oppCardThree.operation == "div"){
        oppScore = (oppScore/oppCardThree.num);
    }
    else if(oppCardThree.operation == "mul"){
        oppScore = (oppScore * oppCardThree.num);
    }

    //Final Game Calculations
    gameOver = (finalScore + (secondDie + 1));
    gameOver2 = (oppScore + (secondDie + 1));

    p1Score.text = `Score: ${gameOver}`;
    p1Score.visible = true;

    p2Score.text = `Score: ${gameOver2}`;
    p2Score.visible = true;

    console.log(gameOver);
    console.log(oppScore);

    win();

}

function round(n){
    // Smaller multiple
    let a = parseInt(n / 10, 10) * 10;
          
    // Larger multiple
    let b = a + 10;
      
    // Return of closest of two
    return (n - a > b - n)? b : a;
}

function win(){
    let x = round(gameOver);
    let y = round(gameOver2);
    let difOne = null;
    let difTwo = null;

    //Player One
    if(gameOver >= x){
        difOne = (gameOver - x);
    }
    else if(gameOver <= x){
        difOne = (x - gameOver);
    }

    //Player 2
    if(gameOver2 >= y){
        difTwo = (gameOver2 - y);
    }
    else if(gameOver2 <= y){
        difTwo = (y - gameOver2);
    }

    //Final
    if(difOne > difTwo){
        console.log("Player 2 Wins");
        line10.text = "Player 2 Wins";
    }
    else if(difTwo > difOne){
        console.log("Player 1 Wins");
        line10.text = "Player 1 Wins";
    }
    else if(difOne == difTwo){
        if(x > y){
            console.log("Player 1 Wins");
            line10.text = "Player 1 Wins";
        }
        if(y > x){
            console.log("Player 2 Wins");
            line10.text = "Player 2 Wins";
        }
    }
}