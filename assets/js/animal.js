"use strict"
export default
class Animal {
  #comentarios;

  constructor(nombre, edad, img, comentarios, sonido) {
    this.nombre = nombre;
    this.edad = edad;
    this.img = img;
    this.#comentarios = comentarios;
    this.sonido = sonido;
  }

  get Nombre() {
    return this.nombre;
  }

  get Edad() {
    return this.edad;
  }

  set Comentarios(value) {
    this.#comentarios = value;
  }

  get Comentarios() {
    return this.#comentarios;
  }

  get Sonido() {
    return this.sonido;
  }
}

export class Leon extends Animal  {
  constructor(nombre, edad, img, comentarios, sonido) {
  super(nombre, edad, img, comentarios, sonido)
  }
  Rugir(player) {
    player.src = `./assets/sounds/Rugido.mp3`;
    player.load();
    player.play();
  }
}

export class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
  super(nombre, edad, img, comentarios, sonido)
  }
  Aullar(player) {
    player.src = `./assets/sounds/Aullido.mp3`;
    player.load();
    player.play();
  }
}

export class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
  super(nombre, edad, img, comentarios, sonido)
  }
  Gruñir(player) {
    player.src = `./assets/sounds/Gruñido.mp3`;
    player.load();
    player.play();
  }
}

export class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
  super(nombre, edad, img, comentarios, sonido)
  }
  Sisear(player) {
    player.src = `./assets/sounds/Siseo.mp3`;
    player.load();
    player.play();
  }
}

export class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
  super(nombre, edad, img, comentarios, sonido)
  }
  Chillar(player) {
    player.src = `./assets/sounds/Chillido.mp3`;
    player.load();
    player.play();
  }
}
