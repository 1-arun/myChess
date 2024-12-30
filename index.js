

import { initialGameRender } from "../myChess/Render/main.js";
import { initGame } from "./Data/data.js";
import { globalEvent } from "../myChess/Events/global.js";

// it will be usefull till game end
const globalState = initGame()
initialGameRender(globalState)

globalEvent()

export {globalState}