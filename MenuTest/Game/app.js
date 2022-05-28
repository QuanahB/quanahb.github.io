const Application = PIXI.Application;

//Rules to Game
console.log("The Goal is to get as close to a multiple of 10 as possible!");
console.log("the player who gets as close to a multiple of ten wins!");
console.log("If both players are equally close, then the player who is closer to a larger multiple of 10 wins");
console.log("NUMBERS ENDING IN 5 ARE TYPICALLY LOSING")

//Games Interpretations of cards 
let firstCard = null;
let secondCard = null;
let thirdCard = null;

let fourthCard = null;
let fifthCard = null;
let sixthCard = null;

//Games Interpretation of Dice Values
let firstDie = null;
let secondDie = null;

//Dice
let drag = null;
let drip = null;

//Cards on Bottom
let drop = null;
let magic = null;
let hello = null;

//Cards on top (to be selected (PLAYER ONE))
let ani = null;
let tween = null;
let move = null;

//Cards on top (to be selected (PLAYER TWO))
let david = null;
let judas = null;
let paul = null;

//Cards on bottom (PLAYER TWO)
let matt = null;
let tom = null;
let simon = null;

//Phases
let phaseOne = false;
let phaseTwo = false;
let phaseThree = false;
setTimeout(() => {changePhaseOne(); }, 6000);

//Text
let line10 = null;
let p1Score = null;
let p2Score = null;

const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true
});

app.renderer.backgroundColor = 0x23395D;

app.renderer.resize(window.innerWidth,window.innerWidth);
app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const loader = PIXI.Loader.shared;

loader.add('tileset',"./images/spritesheet.json");
loader.add('idk',"./images/secondDie.json");
loader.add('tileset2',"./images/cards.json");
loader.add('tiles',"./images/cards2.json");
loader.add('tiles2',"./images/cards3.json");
loader.add("tileset3","./images/cardSelect.json");
loader.add("tileset4","./images/cardSelect2.json");
loader.add("tileset5","./images/cardSelect3.json");
//MIGHT BE UNNECCASary 
loader.add("opp","./images/player2images/secSelect.json");
loader.add("opp2","./images/player2images/secSelect2.json");
loader.add("opp3","./images/player2images/secSelect3.json");
loader.add("stop","./images/player2images/twoCards.json");
loader.add("stop2","./images/player2images/twoCards2.json");
loader.add("stop3","./images/player2images/twoCards3.json");

loader.load(setup);

/*function setup(loader,resources){
    const char4Sprite = new PIXI.Sprite(
        resources.image1.texture
    );
    char4Sprite.y = 400;
    app.stage.addChild(char4Sprite);
}

function setup(loader,resources){
    const dragTexture = PIXI.Texture.from('tile000.png');
    const dragSprite = new PIXI.Sprite(dragTexture);
    dragSprite.position.set(100,100);
    dragSprite.scale.set(2,2);
    app.stage.addChild(dragSprite);
} */


//FIRST LOADED ANIMATIONS
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

function setup(loader,resources){
    //DICE
    const textures = [];
    for(let i = 0; i < 6; i++){
        const texture = PIXI.Texture.from(`tile00${i}.png`);
        textures.push(texture);
    }

    drag = new PIXI.AnimatedSprite(textures);
    drag.position.set(50,50);
    drag.scale.set(3,3);
    app.stage.addChild(drag);
    drag.play();
    drag.animationSpeed = 0.1;
    setTimeout(() => {drag.stop(); }, getRandomInt(2000,5001));
    //setTimeout(() => {console.log(drag.currentFrame); }, 5002);

    //SECOND DICE
    const texturesPack = [];
    for(let i = 0; i < 6; i++){
        const texture = PIXI.Texture.from(`slot${i}.png`);
        texturesPack.push(texture);
    }

    drip = new PIXI.AnimatedSprite(texturesPack);
    drip.position.set(100,50);
    drip.scale.set(3,3);
    app.stage.addChild(drip);
    drip.visible = false;

    //CARD 1
    const feelings = [];
    for(let i = 0; i < 12; i++){
        const texture = PIXI.Texture.from(`ttile00${i}.png`);
        feelings.push(texture);
    }

    drop = new PIXI.AnimatedSprite(feelings);
    drop.position.set(200,400);
    drop.scale.set(.5,.5);
    app.stage.addChild(drop);
    drop.play();
    drop.animationSpeed = 0.3;
    setTimeout(() => {drop.stop(); }, getRandomInt(2000,5001));
    //setTimeout(() => {console.log(drop.currentFrame); }, 5002);
    //setTimeout(() => {console.log(cardSelect(drop.currentFrame)); }, 5002);
    drop.interactive = true;
    drop.on("mousedown",changeImage1);

    //CARD 2
    const feels = [];
    for(let i = 0; i < 12; i++){
        const texture = PIXI.Texture.from(`patch${i}.png`);
        feels.push(texture);
    }

    magic = new PIXI.AnimatedSprite(feels);
    magic.position.set(250,400);
    magic.scale.set(.5,.5);
    app.stage.addChild(magic);
    magic.play();
    magic.animationSpeed = 0.3;
    setTimeout(() => {magic.stop(); }, getRandomInt(2000,5001));
    //setTimeout(() => {console.log(magic.currentFrame); }, 5002);
    //setTimeout(() => {console.log(cardSelect(magic.currentFrame)); }, 5002);
    magic.interactive = true;
    magic.on("mousedown",changeImage2);

    //CARD 3
    const wave = [];
    for(let i = 0; i < 12; i++){
        const texture = PIXI.Texture.from(`stitch${i}.png`);
        wave.push(texture);
    }

    hello = new PIXI.AnimatedSprite(wave);
    hello.position.set(300,400);
    hello.scale.set(.5,.5);
    app.stage.addChild(hello);
    hello.play();
    hello.animationSpeed = 0.3;
    setTimeout(() => {hello.stop(); }, getRandomInt(2000,5001));
    //setTimeout(() => {console.log(hello.currentFrame); }, 5002);
    //setTimeout(() => {console.log(cardSelect(hello.currentFrame)); }, 5002);
    hello.interactive = true;
    hello.on("mousedown",changeImage3);

    //BLANK CARD 2 !!!!!
    const tweenify = [];
    for(let i = 0; i < 13; i++){
        const texture = PIXI.Texture.from(`til${i}.png`);
        tweenify.push(texture);
    }

    tween = new PIXI.AnimatedSprite(tweenify);
    tween.position.set(250,300);
    tween.scale.set(.5,.5);
    app.stage.addChild(tween);
    tween.play();
    tween.animationSpeed = 0.3;
    tween.gotoAndStop(12);

    //BLANK CARD 1 !!!!!
    const animate = [];
    for(let i = 0; i < 13; i++){
        const texture = PIXI.Texture.from(`tile${i}.png`);
        animate.push(texture);
    }

    ani = new PIXI.AnimatedSprite(animate);
    ani.position.set(200,300);
    ani.scale.set(.5,.5);
    app.stage.addChild(ani);
    ani.play();
    ani.animationSpeed = 0.3;
    ani.gotoAndStop(12);

    //BLANK CARD 3
    const movement = [];
    for(let i = 0; i < 13; i++){
        const texture = PIXI.Texture.from(`ile${i}.png`);
        movement.push(texture);
    }

    move = new PIXI.AnimatedSprite(movement);
    move.position.set(300,300);
    move.scale.set(.5,.5);
    app.stage.addChild(move);
    move.play();
    move.animationSpeed = 0.3;
    move.gotoAndStop(12);

    //OPPONENT SIDE CARDS!!!!!!!!!!!!!

    //BLANK CARD 1 
    const action = [];
    for(let i = 0; i < 13; i++){
        const texture = PIXI.Texture.from(`tile${i}.png`);
        action.push(texture);
    }

    david = new PIXI.AnimatedSprite(action);
    david.position.set(200,170);
    david.scale.set(.5,.5);
    app.stage.addChild(david);
    david.play();
    david.animationSpeed = 0.3;
    david.gotoAndStop(12);

    //BLANK CARD 2
    const current = [];
    for(let i = 0; i < 13; i++){
        const texture = PIXI.Texture.from(`tile${i}.png`);
        current.push(texture);
    }

    judas = new PIXI.AnimatedSprite(current);
    judas.position.set(250,170);
    judas.scale.set(.5,.5);
    app.stage.addChild(judas);
    judas.play();
    judas.animationSpeed = 0.3;
    judas.gotoAndStop(12);

    //BLANK CARD 3
    const gesture = [];
    for(let i = 0; i < 13; i++){
        const texture = PIXI.Texture.from(`tile${i}.png`);
        gesture.push(texture);
    }

    paul = new PIXI.AnimatedSprite(gesture);
    paul.position.set(300,170);
    paul.scale.set(.5,.5);
    app.stage.addChild(paul);
    paul.play();
    paul.animationSpeed = 0.3;
    paul.gotoAndStop(12);

    //CARD 1
    const change = [];
    for(let i = 0; i < 12; i++){
        const texture = PIXI.Texture.from(`ttile00${i}.png`);
        change.push(texture);
    }

    matt = new PIXI.AnimatedSprite(change);
    matt.position.set(200,100);
    matt.scale.set(.5,.5);
    app.stage.addChild(matt);
    matt.play();
    matt.animationSpeed = 0.3;
    setTimeout(() => {matt.stop(); }, getRandomInt(2000,5001));
    matt.interactive = true;
    matt.on("mousedown",changeImage4);

    //CARD 2
    const drift = [];
    for(let i = 0; i < 12; i++){
        const texture = PIXI.Texture.from(`ttile00${i}.png`);
        drift.push(texture);
    }

    tom = new PIXI.AnimatedSprite(drift);
    tom.position.set(250,100);
    tom.scale.set(.5,.5);
    app.stage.addChild(tom);
    tom.play();
    tom.animationSpeed = 0.3;
    setTimeout(() => {tom.stop(); }, getRandomInt(2000,5001));
    tom.interactive = true;
    tom.on("mousedown",changeImage5);

    //CARD 3
    const course = [];
    for(let i = 0; i < 12; i++){
        const texture = PIXI.Texture.from(`ttile00${i}.png`);
        course.push(texture);
    }

    simon = new PIXI.AnimatedSprite(course);
    simon.position.set(300,100);
    simon.scale.set(.5,.5);
    app.stage.addChild(simon);
    simon.play();
    simon.animationSpeed = 0.3;
    setTimeout(() => {simon.stop(); }, getRandomInt(2000,5001));
    simon.interactive = true;
    simon.on("mousedown",changeImage6);

    //UI Text
    line10 = new PIXI.Text('Wait...',optionStyle);
    line10.position.set(200,550);
    app.stage.addChild(line10);

    p1Score = new PIXI.Text('Score: ',optionStyle);
    p1Score.position.set(350,350);
    p1Score.visible = false;
    app.stage.addChild(p1Score); 

    p2Score = new PIXI.Text('Score: ',optionStyle);
    p2Score.position.set(350,100);
    p2Score.visible = false;
    app.stage.addChild(p2Score);



}

//Font for Text
const optionStyle = new PIXI.TextStyle({
    fontFamily: 'Montserrat',
    fontSize: 30,
    fill: 'deepskyblue',
    stroke: '#ffffff',
    strokeThickness: 1,
    dropShadow: true,
    dropShadowDistance: 1,
    dropShadowAngle: Math.PI/2,
    dropShadowBlur: 4,
    dropshadowColor: '#000000',
});
