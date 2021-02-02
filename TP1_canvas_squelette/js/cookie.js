class Cookie {
  constructor(type, ligne, colonne, image) {
    this.type = type;
    this.ligne = ligne;
    this.colonne = colonne;

    this.image = image; // pour canvas
    this.width = 80;
    this.height = 80;
  }

  draw(ctx, x, y) {
    ctx.save();
    // A FAIRE !
    ctx.drawImage(this.image,x,y);
    ctx.restore();
  }
}
