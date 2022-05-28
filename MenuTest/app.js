const Application = PIXI.Application;

const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true
});

app.renderer.backgroundColor = 0x23395D;
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = 'absolute';
document.body.appendChild(app.view);


//TEXT

//Style for Title of Game
const titleStyle = new PIXI.TextStyle({
    fontFamily: 'Montserrat',
    fontSize: 80,
    fill: 'deepskyblue',
    stroke: '#ffffff',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowDistance: 3,
    dropShadowAngle: Math.PI/2,
    dropShadowBlur: 4,
    dropshadowColor: '#000000',
});

//Style for menu Options
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

//Setting Title and its position
const title = new PIXI.Text('Close to 10',titleStyle);
title.position.set(200,200);

//Setting Menu Options and postions
const instructions = new PIXI.Text('Instructions',optionStyle);
instructions.position.set(300,300);
instructions.interactive = true;
instructions.on("mousedown",directions);
function directions(){
    window.location.href = "./instruct.html";
}

const single = new PIXI.Text('Single Player',optionStyle);
single.position.set(300,350);
single.interactive = true;
single.on("mousedown",playSingle);
function playSingle(){
    window.location.href = "./Single/index.html";
}

const multi = new PIXI.Text('Multiplayer',optionStyle);
multi.position.set(300,400);
multi.interactive = true;
multi.on("mousedown",playMulti);
function playMulti(){
    window.location.href = "./Game/index.html";
}

//Adding Elements to View
app.stage.addChild(title);
app.stage.addChild(instructions);
app.stage.addChild(single);
app.stage.addChild(multi);