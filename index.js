import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import CapsEraKaijuMan from "./CapsEraKaijuMan/CapsEraKaijuMan.js";
import VileKaijuMan from "./VileKaijuMan/VileKaijuMan.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  CapsEraKaijuMan: new CapsEraKaijuMan({
    x: 86,
    y: 45,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 1
  }),
  VileKaijuMan: new VileKaijuMan({
    x: -59.38824023430966,
    y: -60.411696589539446,
    direction: 54.05653913495204,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 2
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
