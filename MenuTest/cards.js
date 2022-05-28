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

//Sentences 
const line1 = new PIXI.Text('Spades are Addition',optionStyle);
line1.position.set(80,100);

const line2 = new PIXI.Text('Hearts are Subtraction',optionStyle);
line2.position.set(80,140);

const line3 = new PIXI.Text('Clubs are Division',optionStyle);
line3.position.set(80,180);

const line4 = new PIXI.Text('Diamonds are Multiplication',optionStyle);
line4.position.set(80,220);

const line5 = new PIXI.Text('MAIN MENU ->',optionStyle);
line5.position.set(80,280);
line5.interactive = true;
line5.on("mousedown",next);
function next(){
    window.location.href = "./index.html";
}


//Adding to view
app.stage.addChild(line1);
app.stage.addChild(line2);
app.stage.addChild(line3);
app.stage.addChild(line4);
app.stage.addChild(line5);
