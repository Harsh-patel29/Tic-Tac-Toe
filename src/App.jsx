import { useState } from "react";
import Icons from "./Components/Icons.jsx";
import { toast, ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  const [isCircle, setisCircle] = useState(false);
  const [gameWinner, setgamewinner] = useState("");
  const [gameState, setgameState] = useState(new Array(9).fill("empty", 0, 9));

  const reloadGame = () => {
    setisCircle(false);
    setgamewinner("");
    setgameState(new Array(9).fill("empty", 0, 9));
  };

  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== "empty"
    ) {
      setgamewinner(`${gameState[0]} won the Game! 🥳`);
    } else if (
      gameState[3] !== "empty" &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setgamewinner(`${gameState[3]} won the Game! 🥳`);
    } else if (
      gameState[6] !== "empty" &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setgamewinner(`${gameState[6]} won the Game! 🥳`);
    } else if (
      gameState[0] !== "empty" &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setgamewinner(`${gameState[0]} won the Game! 🥳`);
    } else if (
      gameState[1] !== "empty" &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setgamewinner(`${gameState[1]} won the Game! 🥳`);
    } else if (
      gameState[2] !== "empty" &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setgamewinner(`${gameState[2]} won the Game! 🥳`);
    } else if (
      gameState[0] !== "empty" &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setgamewinner(`${gameState[0]} won the Game! 🥳`);
    } else if (
      gameState[2] !== "empty" &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setgamewinner(`${gameState[2]} won the Game! 🥳`);
    } else if (!gameState.includes("empty", 0)) {
      setgamewinner("Draw game... ⌛️");
    }
  };

  const onChangeItem = (itemNumber) => {
    if (gameWinner) {
      return toast.info(gameWinner, {
        position: "top-center",
        autoClose: 3000,
      });
    }
    if (gameState[itemNumber] === "empty") {
      gameState[itemNumber] = isCircle ? "circle" : "cross";
      setisCircle(!isCircle);
    } else {
      return toast.error("Position is already filled", {
        position: "top-center",
        autoClose: 3000,
      });
    }
    checkIsWinner();
  };
  return (
    <>
      <div className=" mt-30 flex h-12 items-center justify-center flex-col ">
        {gameWinner ? (
          <div className="bg-green-500 h-12 w-1/2 flex rounded-md justify-center ">
            <h1 className="flex items-center">{gameWinner}</h1>
          </div>
        ) : (
          <div className="bg-yellow-500 w-1/2 h-12 flex rounded-md justify-center">
            <h1 className="flex items-center">
              Player {isCircle ? "O" : "X"}'s turn
            </h1>
          </div>
        )}
      </div>
      <div className="flex  justify-center   mt-30">
        <div className="  grid w-1/2 grid-cols-3 gap-12 gap-y-20">
          {gameState.map((item, index) => (
            <button
              className="flex items-center margin-10"
              key={index}
              onClick={() => onChangeItem(index)}
            >
              <Icons name={item} />
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-20">
        <button
          className="bg-fuchsia-600 rounded-lg cursor-pointer h-10 w-40"
          onClick={reloadGame}
        >
          {gameWinner ? "Start a New Game" : "Reload Game"}
        </button>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
