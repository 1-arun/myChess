

import { initialGameRender } from "../myChess/Render/main.js";
import { initGame } from "./Data/data.js";

const globalState = initGame()
initialGameRender(globalState)

