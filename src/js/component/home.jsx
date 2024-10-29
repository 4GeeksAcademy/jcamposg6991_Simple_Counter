import React from "react";
import SecondsCounter from "./secondsCounter";



//create your first component
const Home = () => {

	let sec = 0

	setInterval(()=>{
		const one = Math.floor((sec/1)%10)
		console.log(one);
		sec+=1
	},1000)

	return (
		<>
		<SecondsCounter digitOne={sec} digitTwo={0} digitThree={0} digitFour={0} digitFive={0} digitSix={0}/>
		</>
	);
};

export default Home;
