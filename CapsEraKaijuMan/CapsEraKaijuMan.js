/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CapsEraKaijuMan extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("stand", "./CapsEraKaijuMan/costumes/stand.svg", {
        x: 86.66665649414062,
        y: 94.33332824707031
      }),
      new Costume("chargeup", "./CapsEraKaijuMan/costumes/chargeup.svg", {
        x: 130.81067823327106,
        y: 55.833328247070284
      }),
      new Costume("shot", "./CapsEraKaijuMan/costumes/shot.svg", {
        x: 130.81067823327106,
        y: 55.833328247070284
      }),
      new Costume("bite", "./CapsEraKaijuMan/costumes/bite.svg", {
        x: 134.87104908990267,
        y: 73.81748036194539
      }),
      new Costume("SLAM", "./CapsEraKaijuMan/costumes/SLAM.svg", {
        x: 128.02263475501027,
        y: 70.20288495983344
      }),
      new Costume(
        "kangaroo kick",
        "./CapsEraKaijuMan/costumes/kangaroo kick.svg",
        { x: 88.52535214631453, y: 111.29742716366209 }
      ),
      new Costume("tail slap", "./CapsEraKaijuMan/costumes/tail slap.svg", {
        x: 88.92920244377538,
        y: 108.066085982522
      }),
      new Costume("walk", "./CapsEraKaijuMan/costumes/walk.svg", {
        x: 86.66665649414062,
        y: 94.3333282470703
      })
    ];

    this.sounds = [new Sound("pop", "./CapsEraKaijuMan/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked9),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked10)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.keyPressed("w") || this.keyPressed("up arrow")) {
        this.y += 3;
      }
      if (this.keyPressed("d") || this.keyPressed("right arrow")) {
        this.x += 3;
        this.direction = 90;
      }
      if (this.keyPressed("a") || this.keyPressed("left arrow")) {
        this.direction = -90;
        this.x -= 3;
      }
      if (this.keyPressed("s") || this.keyPressed("down arrow")) {
        this.y -= 3;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.attack = -1;
    while (true) {
      if (
        this.toNumber(this.stage.vars.attack) === 1 &&
        this.toString(this.stage.vars.cooldown) === "ready"
      ) {
        this.stage.vars.active = 1;
        this.costume = "tail slap";
        yield* this.wait(0.5);
        this.costume = "stand";
        this.stage.vars.attack = -1;
        this.stage.vars.active = 0;
      }
      if (this.toString(this.stage.vars.combo) === "yes") {
        if (this.keyPressed("q")) {
          this.stage.vars.active = 5;
          this.costume = "SLAM";
          yield* this.wait(2);
          this.stage.vars.active = 0;
          this.costume = "stand";
        }
      }
      if (this.toString(this.stage.vars.combo) === "yes") {
        if (this.keyPressed("e")) {
          this.stage.vars.active = 6;
          this.costume = "shot";
          yield* this.wait(1);
          this.stage.vars.active = 0;
          this.costume = "stand";
          yield* this.wait(1);
        }
      }
      if (
        this.toNumber(this.stage.vars.attack) === 2 &&
        this.toString(this.stage.vars.cooldown2) === "ready"
      ) {
        this.stage.vars.active = 2;
        this.costume = "bite";
        yield* this.wait(0.5);
        this.stage.vars.active = 0;
        this.costume = "stand";
        this.stage.vars.attack = -1;
      }
      if (
        this.toNumber(this.stage.vars.attack) === 3 &&
        this.toString(this.stage.vars.cooldown3) === "ready"
      ) {
        this.stage.vars.active = 3;
        this.costume = "kangaroo kick";
        yield* this.wait(0.5);
        this.costume = "stand";
        this.stage.vars.active = 0;
        this.stage.vars.attack = -1;
      }
      if (
        this.toNumber(this.stage.vars.attack) === 4 &&
        this.toString(this.stage.vars.cooldown4) === "ready"
      ) {
        this.costume = "chargeup";
        yield* this.wait(0.5);
        this.costume = "shot";
        this.stage.vars.active = 4;
        yield* this.wait(3);
        this.stage.vars.active = 0;
        this.costume = "stand";
        yield* this.wait(0.5);
        this.stage.vars.attack = -1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (
        !(
          this.keyPressed("w") ||
          this.keyPressed("up arrow") ||
          this.keyPressed("d") ||
            this.keyPressed("right arrow") ||
            this.keyPressed("a") ||
              this.keyPressed("left arrow") ||
              this.keyPressed("s") || this.keyPressed("down arrow")
        )
      ) {
        this.stage.vars.attack = -1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.keyPressed("1")) {
        this.stage.vars.attack = 1;
      }
      if (this.keyPressed("2")) {
        this.stage.vars.attack = 2;
      }
      if (this.keyPressed("3")) {
        this.stage.vars.attack = 3;
      }
      if (this.keyPressed("4")) {
        this.stage.vars.attack = 4;
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    this.stage.vars.cooldown = "ready";
    this.stage.vars.cooldown2 = "ready";
    this.stage.vars.cooldown3 = "ready";
    this.stage.vars.cooldown4 = "ready";
    while (true) {
      if (this.toNumber(this.stage.vars.attack) === 1) {
        yield* this.wait(0.5);
        this.stage.vars.cooldown = 2;
        yield* this.wait(this.toNumber(this.stage.vars.cooldown));
        this.stage.vars.cooldown = "ready";
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.toNumber(this.stage.vars.attack) === 4) {
        yield* this.wait(4);
        this.stage.vars.cooldown4 = 5;
        yield* this.wait(this.toNumber(this.stage.vars.cooldown4));
        this.stage.vars.cooldown4 = "ready";
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    while (true) {
      if (this.toNumber(this.stage.vars.attack) === 3) {
        yield* this.wait(0.5);
        this.stage.vars.cooldown3 = 2;
        yield* this.wait(this.toNumber(this.stage.vars.cooldown3));
        this.stage.vars.cooldown3 = "ready";
      }
      yield;
    }
  }

  *whenGreenFlagClicked8() {
    while (true) {
      if (this.toNumber(this.stage.vars.attack) === 2) {
        yield* this.wait(0.5);
        this.stage.vars.cooldown2 = 2;
        yield* this.wait(this.toNumber(this.stage.vars.cooldown2));
        this.stage.vars.cooldown2 = "ready";
      }
      yield;
    }
  }

  *whenGreenFlagClicked9() {
    while (true) {
      if (this.toNumber(this.stage.vars.attack) === 1) {
        yield* this.wait(0.5);
        if (this.toNumber(this.stage.vars.attack) === 2) {
          yield* this.wait(0.5);
          if (this.toNumber(this.stage.vars.attack) === 3) {
            this.stage.vars.combo = "yes";
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked10() {
    while (true) {
      if (this.toString(this.stage.vars.combo) === "yes") {
        yield* this.wait(2);
        this.stage.vars.combo = "no";
      }
      yield;
    }
  }
}
