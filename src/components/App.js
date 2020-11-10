import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
	const [renderBall, setRenderBall] = useState(false);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [ballPosition, setBallPosition] = useState({
		left: "0px",
		top: "0px"
	});
	const HandleStart = () => {
		setRenderBall(true);
		document.addEventListener("keydown", handleKeyPress);
	};
	let bx = 0;
	let by = 0;
	const handleKeyPress = (event) => {
		console.log(event.keyCode);
		if (event.keyCode === 39) {
			bx += 5;
			//setX({ x: x + 5 });
		} else if (event.keyCode === 37) {
			bx -= 5;
			//setX({ x: x - 5 });
		} else if (event.keyCode === 38) {
			//setY({ y: y - 5 });
			by -= 5;
		} else if (event.keyCode === 40) {
			//setY({ y: y + 5 });
			by += 5;
		}
		setBallPosition({ left: `${bx}px`, top: `${by}px` });
	};
	const reset = () => {
		setRenderBall(false);
		bx = 0;
		by = 0;
		setBallPosition({ left: `${bx}px`, top: `${by}px` });
	};
	const renderChoice = () => {
		if (renderBall) {
			return <div className="ball" style={ballPosition}></div>;
		} else {
			return (
				<button onClick={HandleStart} className="start">
					Start
				</button>
			);
		}
	};

	return (
		<div className="playground">
			<button onClick={reset} className="reset">
				Reset
			</button>
			{renderChoice()}
		</div>
	);
};

export default App;
