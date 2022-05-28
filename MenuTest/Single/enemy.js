const enemyDeck = [addOne,addTwo,addThree,subOne,subTwo,subThree,divOne,divTwo,divThree,mulOne,mulTwo,mulThree];
const enemyDeckTwo = [0,1,2,9,10,11]; //The Sauce for seperate phases for enemy!!

let enemyCardOne = enemyDeck[Math.floor(Math.random() * enemyDeck.length)]; //Select random element from array
let enemyCardTwo = enemyDeck[Math.floor(Math.random() * enemyDeck.length)];
let enemyCardThree = enemyDeck[Math.floor(Math.random() * enemyDeck.length)];

let replaceOne = enemyDeck[Math.floor(Math.random() * enemyDeck.length)];
let replaceTwo = enemyDeck[Math.floor(Math.random() * enemyDeck.length)];

//Functions to decide which card to select for each phase.
function selectPhaseOne(){

    /*if(x.num >= y.num && x.num >= z.num){
        let dummy = x;
        return dummy;
    }
    if(y.num >= x.num && y.num >= z.num){
        let dummy = y;
        return dummy;
    }
    if(z.num >= x.num && z.num >= y.num){
        let dummy = z;
        return dummy;
    }*/

    let idk = Math.floor(Math.random() * enemyDeck.length);

    oppCardOne = enemyDeck[idk];
    david.gotoAndStop(idk);

}

function selectPhaseTwo(){
    
    //let idc = enemyDeck[Math.floor(Math.random() * enemyDeck.length)];
    let idk = Math.floor(Math.random() * enemyDeck.length);

    oppCardTwo = enemyDeck[idk];
    judas.gotoAndStop(idk);
    //return idc;

}

function selectPhaseThree(){

    //let idc = enemyDeck[Math.floor(Math.random() * enemyDeck.length)];
    let idk = enemyDeckTwo[Math.floor(Math.random() * enemyDeckTwo.length)];

    oppCardThree = enemyDeck[idk];
    paul.gotoAndStop(idk);
    //return idc;
    
}



