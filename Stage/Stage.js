/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.attack = -1;
    this.vars.cooldown = "ready";
    this.vars.cooldown2 = "ready";
    this.vars.cooldown3 = "ready";
    this.vars.cooldown4 = "ready";
    this.vars.combo = "no";
    this.vars.active = 0;
    this.vars.range = "range";
  }
}
