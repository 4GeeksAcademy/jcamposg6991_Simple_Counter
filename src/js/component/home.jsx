import React from "react";
import SecondsCounter from "./secondsCounter";

const timer = [{
	digitOne:0,
	digitTwo:0,
	digitThree:0,
	digitFour:0,
	digitFive:0,
	digitSix:0
}]



//create your first component
const Home = () => {
	return (
		<>
		{timer.map((atribute, index) => (<SecondsCounter key={index} timer={atribute} />))}
		</>
	);
};

export default Home;
