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

  /** renvoie la distance entre deux cookies */
  static distance(cookie1, cookie2) {
    let l1 = cookie1.ligne;
    let c1 = cookie1.colonne;
    let l2 = cookie2.ligne;
    let c2 = cookie2.colonne;

    const distance = Math.sqrt((c2 - c1) * (c2 - c1) + (l2 - l1) * (l2 - l1));
    console.log("Distance = " + distance);
    return distance;
  }

  selectionne() {
    // on change l'image et la classe CSS
    //this.htmlImage.classList.add("cookies-selected");  
    switch (this.type) {
      case 0:
        this.image = grille.assets.croissantHighlighted;
        break;
      case 1:
        this.image = grille.assets.cupcakeHighlighted;
        break;
      case 2:
        this.image = grille.assets.danishHighlighted;
        break;
      case 3:
        this.image = grille.assets.donutHighlighted;
        break;
      case 4:
        this.image = grille.assets.macaroonHighlighted;
        break;
      case 5:
        this.image = grille.assets.sugarCookieHighlighted;
        break;
    }
  }

  deselectionne() {
    // on change l'image et la classe CSS
    this.image.classList.add("cookies-selected");  
    switch (this.type) {
      case 0:
        this.image = grille.assets.croissant;
        break;
      case 1:
        this.image = grille.assets.cupcake;
        break;
      case 2:
        this.image = grille.assets.danish;
        break;
      case 3:
        this.image = grille.assets.donut;
        break;
      case 4:
        this.image = grille.assets.macaroon;
        break;
      case 5:
        this.image = grille.assets.sugarCookie;
        break;
    }
  }
}
