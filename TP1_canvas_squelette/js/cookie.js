class Cookie {
  constructor(type, ligne, colonne, image) {
    this.type = type;
    this.ligne = ligne;
    this.colonne = colonne;

    this.image = image; // pour canvas
    this.width = 75;
    this.height = 75;

    this.currentY = 0;
  }

  draw(ctx, x, y) {
    ctx.save();
    // A FAIRE !
    ctx.drawImage(this.image, x, this.currentY, this.width, this.height);
    if (this.currentY < y) {
      this.currentY += 10;
    }

    ctx.restore();
  }

  dragAndDraw(ctx, x, y) {
    ctx.save();
    ctx.drawImage(this.image, x, y, this.width, this.height);
    ctx.restore();
  }
}
