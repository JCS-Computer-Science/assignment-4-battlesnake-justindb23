// Welcome to
// __________         __    __  .__                               __
// \______   \_____ _/  |__/  |_|  |   ____   ______ ____ _____  |  | __ ____
//  |    |  _/\__  \\   __\   __\  | _/ __ \ /  ___//    \\__  \ |  |/ // __ \
//  |    |   \ / __ \|  |  |  | |  |_\  ___/ \___ \|   |  \/ __ \|    <\  ___/
//  |________/(______/__|  |__| |____/\_____>______>___|__(______/__|__\\_____>
//
// This file can be a nice home for your Battlesnake logic and helper functions.
//
// To get you started we've included code to prevent your Battlesnake from moving backwards.
// For more info see docs.battlesnake.com
import express from 'express';
import move from './moveLogic.js'

const app = express();
app.use(express.json());
const config = {
  apiversion: "1",
  author: "",       // TODO: Your Battlesnake Username
  color: "#3978ff", // TODO: Choose color
  head: "safe",  // TODO: Choose head, see https://play.battlesnake.com/customizations/ for options unlocked in your account
  tail: "round-bum",  // TODO: Choose tail, see https://play.battlesnake.com/customizations/ for options unlocked in your account
}

//TODO: respond to GET requests on "/" with the config object above
app.get("/",(req,res)=>{
  res.json(config)
})

//TODO: respond to POST requests on "/start". Your response itself is ignored, but must have status code "200"
//      the request body will contain objects representing the game instance, game board state, and your snake
//      https://docs.battlesnake.com/api/requests/start
function handlestart(request, response){
  let gameData = request.body

  response.status(200).send('ok')
}
//TODO: respond to POST requests on "/move". Your response should be an object with a "move" property and optionally
//      a "shout" property. The request body again contains objects representing the game state
//      https://docs.battlesnake.com/api/requests/move
app.post("/move",handlemove)

function handlemove(request, response){
  let gameData = request.body

  response.status(200).send(move(gamedata))
}
//TODO: respond to POST requests on "/end", which signals the end of a game. Your response itself is ignored, 
//      but must have status code "200" the request body will contain objects representing the game
//      https://docs.battlesnake.com/api/requests/end
let handleEnd(request, response){
  let gameData=request.body

  console.log('end')
  response.status(200).send('ok')
}
const host = '0.0.0.0';
const port = process.env.PORT || 8000;

app.listen(port, host, () => {
  console.log(`Running Battlesnake at hhtp://${host}:${port}...`)
});