/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class VileKaijuMan extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("stand", "./VileKaijuMan/costumes/stand.svg", {
        x: 86.66665649414062,
        y: 94.3333282470703
      }),
      new Costume("chargeup", "./VileKaijuMan/costumes/chargeup.svg", {
        x: 130.81067823327106,
        y: 55.833328247070284
      }),
      new Costume("shot", "./VileKaijuMan/costumes/shot.svg", {
        x: 130.81067823327106,
        y: 55.833328247070284
      }),
      new Costume("bite", "./VileKaijuMan/costumes/bite.svg", {
        x: 134.87104092376842,
        y: 73.81748057294273
      }),
      new Costume("SLAM", "./VileKaijuMan/costumes/SLAM.svg", {
        x: 128.02263475501027,
        y: 70.20288767176125
      }),
      new Costume(
        "kangaroo kick",
        "./VileKaijuMan/costumes/kangaroo kick.svg",
        { x: 88.52535214631453, y: 111.2974239289566 }
      ),
      new Costume("tail slap", "./VileKaijuMan/costumes/tail slap.svg", {
        x: 88.92920289104953,
        y: 108.06608635223219
      }),
      new Costume("walk", "./VileKaijuMan/costumes/walk.svg", {
        x: 86.66665649414062,
        y: 94.33332824707028
      })
    ];

    this.sounds = [new Sound("pop", "./VileKaijuMan/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (
        this.compare(
          Math.hypot(
            this.sprites["CapsEraKaijuMan"].x - this.x,
            this.sprites["CapsEraKaijuMan"].y - this.y
          ),
          80
        ) > 0 &&
        !(
          this.compare(
            Math.hypot(
              this.sprites["CapsEraKaijuMan"].x - this.x,
              this.sprites["CapsEraKaijuMan"].y - this.y
            ),
            180
          ) > 0
        )
      ) {
        this.stage.vars.range = "range";
      }
      if (
        this.compare(
          Math.hypot(
            this.sprites["CapsEraKaijuMan"].x - this.x,
            this.sprites["CapsEraKaijuMan"].y - this.y
          ),
          80
        ) < 0
      ) {
        this.stage.vars.range = "melee";
        this.move(-3);
      }
      if (
        !(
          (this.compare(
            Math.hypot(
              this.sprites["CapsEraKaijuMan"].x - this.x,
              this.sprites["CapsEraKaijuMan"].y - this.y
            ),
            80
          ) > 0 &&
            !(
              this.compare(
                Math.hypot(
                  this.sprites["CapsEraKaijuMan"].x - this.x,
                  this.sprites["CapsEraKaijuMan"].y - this.y
                ),
                180
              ) > 0
            )) ||
          this.compare(
            Math.hypot(
              this.sprites["CapsEraKaijuMan"].x - this.x,
              this.sprites["CapsEraKaijuMan"].y - this.y
            ),
            80
          ) < 0
        )
      ) {
        this.stage.vars.range = "none";
        this.move(3);
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["CapsEraKaijuMan"].y - this.y,
          this.sprites["CapsEraKaijuMan"].x - this.x
        )
      );
      yield;
    }
  }
}
