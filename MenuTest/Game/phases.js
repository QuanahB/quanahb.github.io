function changePhaseOne(){
    firstDie = drag.currentFrame;
    phaseOne = true;
    phaseTwo = false;
    phaseThree = false;

    line10.text = "Phase 1";
}

function changePhaseTwo(){
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

    if(matt.playing == false){
        tom.interactive = true;
        simon.interactive = true;
    }
    if(tom.playing == false){
        matt.interactive = true;
        simon.interactive = true;
    }
    if(simon.playing == false){
        tom.interactive = true;
        matt.interactive = true;
    }

    console.log("Select Next Card");
    phaseOne = false;
    phaseTwo = true;
    phaseThree = false;

    line10.text = "Phase 2";
    
}

function changePhaseThree(){

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

    if(matt.playing == false){
        tom.interactive = true;
        simon.interactive = true;
    }
    if(tom.playing == false){
        matt.interactive = true;
        simon.interactive = true;
    }
    if(simon.playing == false){
        tom.interactive = true;
        matt.interactive = true;
    }

    console.log("Select Next Card");
    phaseOne = false;
    phaseTwo = false;
    phaseThree = true;

    line10.text = "Phase 3";

}

function endGame(){

    drop.interactive = false;
    magic.interactive = false;
    hello.interactive = false;

    matt.interactive = false;
    tom.interactive = false;
    simon.interactive = false;

    let finalScore = 0;
    let oppScore = 0;
    secondDie = drip.currentFrame
    finalScore = (finalScore + (firstDie + 1) + Math.abs(firstCard.num));
    oppScore = (oppScore + (firstDie + 1) + Math.abs(fourthCard.num));
    console.log(`Player 1: ${finalScore}    Player 2: ${oppScore}`);

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

    if(fifthCard.operation == "add"){
        oppScore = (oppScore + fifthCard.num);
    }
    else if(fifthCard.operation == "sub"){
        oppScore = (oppScore - fifthCard.num);
    }
    else if(fifthCard.operation == "div"){
        oppScore = (oppScore/fifthCard.num);
    }
    else if(fifthCard.operation == "mul"){
        oppScore = (oppScore * fifthCard.num)
    }

    console.log(`Player 1: ${finalScore}    Player 2: ${oppScore}`);

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

    if(sixthCard.operation == "add"){
        oppScore = (oppScore + sixthCard.num);
    }
    else if(sixthCard.operation == "sub"){
        oppScore = (oppScore - sixthCard.num);
    }
    else if(sixthCard.operation == "div"){
        oppScore = (oppScore/sixthCard.num);
    }
    else if(sixthCard.operation == "mul"){
        oppScore = (oppScore * sixthCard.num);
    }

    gameOver = (finalScore + (secondDie + 1));
    gameOver2 = (oppScore + (secondDie + 1));

    console.log(`Player 1: ${finalScore}    Player 2: ${oppScore}`);

    p1Score.text = `Score: ${gameOver}`;
    p1Score.visible = true;

    p2Score.text = `Score: ${gameOver2}`;
    p2Score.visible = true;

    //Place comparison for win
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