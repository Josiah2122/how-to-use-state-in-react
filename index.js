import React from "react"

export default function App(){
	const [count, myFunc] = React.useState(0)

	function add(){
		myFunc(function(oldCount) {
			return oldCount + 1 //this is the better way
//its using the oldvalue of state to determine the new value of state, if you have to deal with this kind of state change this is the best practice for it
		})
	}
	function subtract(){
		myFunc(oldCount => oldCount - 1) // using arrow functions to simplify the code above
	}
	return(
		<div>
			<button onClick="add">+</button>
			<p>{count}</p>
			<button onClick="subtract">-</button>
		</div>
	)
}
