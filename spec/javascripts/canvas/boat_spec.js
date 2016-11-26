
import 'pixi.js'
import { Boat } from '../../../app/brunch/javascripts/canvas/boat'

describe("A suite", () => {
  it("contains spec with an expectation", () => {
    PIXI.loader.resources["spritesheet.json"] = { 'textures' : 'some' }
    new Boat()
    expect(true).toBe(true);
  });
});
