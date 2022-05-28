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
const line1 = new PIXI.Text('Welcome, You’re currently playing “Close to 10',optionStyle);
line1.position.set(80,100);

const line2 = new PIXI.Text('The goal of the game is to get as close to a multiple of 10 as possible',optionStyle);
line2.position.set(80,140);

const line3 = new PIXI.Text('The player who gets closest to the larger multiple of 10 wins',optionStyle);
line3.position.set(80,180);

const line4 = new PIXI.Text('Landing on a number ending in 5 is usually a loss',optionStyle);
line4.position.set(80,220);

const line5 = new PIXI.Text('Cards are either of the Addition, Subtraction, Multiplication, Division variety',optionStyle);
line5.position.set(80,260);

const line6 = new PIXI.Text('The cards either add, subtract, multiply, or divide the current total number by the number on the card',optionStyle);
line6.position.set(80,300);

const line7 = new PIXI.Text('The first card selected only adds to the initial number from the first dice roll',optionStyle);
line7.position.set(80,340);

const line8 = new PIXI.Text('The first die is rolled. Then the first round begins. First round each players selected card only adds to the total',optionStyle);
line8.position.set(80,380);

const line9 = new PIXI.Text('Every other card selected for rounds 2 and 3 react when selected as previously stated',optionStyle);
line9.position.set(80,420);

const line10 = new PIXI.Text('The second die is rolled between rounds 2 and 3',optionStyle);
line10.position.set(80,460);

const line11 = new PIXI.Text('NEXT ->',optionStyle);
line11.position.set(80,520);
line11.interactive = true;
line11.on("mousedown",next);
function next(){
    window.location.href = "./cards.html";
}

//Adding to view
app.stage.addChild(line1);
app.stage.addChild(line2);
app.stage.addChild(line3);
app.stage.addChild(line4);
app.stage.addChild(line5);
app.stage.addChild(line6);
app.stage.addChild(line7);
app.stage.addChild(line8);
app.stage.addChild(line9);
app.stage.addChild(line10);
app.stage.addChild(line11);