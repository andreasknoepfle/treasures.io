use 'esversion: 6'
import PIXI from 'pixi.js'

import { Renderer } from './canvas/renderer'

let nav = document.getElementById("nav")
let footer = document.getElementById("footer")
let map = document.getElementById("map")

let renderer = new Renderer(map, [nav, footer])
