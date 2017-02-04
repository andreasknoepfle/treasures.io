class SpriteHelper {
  static mockSprites(sprites) {
    const url = `file://${__dirname}/bitmap.png`;
    const loader = new PIXI.loaders.Loader();

    loader.add('bitmap', url);

    const textures = sprites.reduce((hash, item) => {
      const spritemap = hash;
      spritemap[item] = loader.resources.bitmap.texture;
      return spritemap;
    }, {});

    PIXI.loader.resources['spritesheet.json'] = {
      textures
    };
  }
}

export default SpriteHelper;
