let app = new PIXI.Application({ width: 400, height: 400 });
document.body.appendChild(app.view);

let sprite = PIXI.Sprite.from(PIXI.Texture.WHITE);
sprite.width = 50;
sprite.height = 50;
app.stage.addChild(sprite);

var buffer = 1;

var spritePosX = 0;
var spritePosY = 0;

var directionX = 1;
var directionY = 1;

let elapsed = 0.0;
app.ticker.add((delta) => {

    elapsed += delta;

    spritePosX += 2 * directionX * buffer * delta;
    spritePosY += 1.5 * directionY * buffer * delta;

    if (spritePosY + 50 > app.view.height) {
        directionY = -1;
    }
    else if (spritePosY < 0)
    {
        directionY = 1;
    }

    if (spritePosX + 50 > app.view.width) {
        directionX = -1;
    }
    else if (spritePosX < 0)
    {
        directionX = 1;
    }

    sprite.x = spritePosX;
    sprite.y = spritePosY;
});