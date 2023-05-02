// app.js

// 1RM - simple One-Rep Max calculator

// REMINDER: 	, /[?&]live\b/i.test(location.search) && "useLiveReload"

console.timeEnd("READY");	// typically 115ms - 180ms

// console.log("app.js TOP");

let _id = 0;

const initialValue = 7;
// var initialValue;

// const h = React.createElement;
const {createElement: h, useState, useEffect} = React;

const Counter = ({initialValue}) => {

	const SWITCH_TO = ["🌛", "☀"];

	const [count, setCount] = useState(initialValue | 0);

	const [mode, setMode] = useState(0);

	const incrementCount = () => setCount(count + 1);

	const decrementCount = () => setCount(count - 1);

	const resetCount = () => setCount(initialValue | 0);

	const updateStyles = (next) => {
		els.forEach(s => next
			? (
				s.backgroundColor = "dimgray",
				s.color = "white"
			) : (
				s.backgroundColor = "white",
				s.color = "black"
			)
		);
	};

	const handleModeClick = () => {
		const next = 1 - mode;
		setMode(next);
	};

	let els;
	useEffect( () => {
		const doc = document;
		els ||= [doc.body, ...doc.querySelectorAll("button")].map(el => el.style);
		updateStyles(mode);
	}, [mode, count]);

	return h("div", null, [
		h("h1", { key: _id ++ }, `Current count: ${count}`),
		h("button", { key: _id ++, onClick: incrementCount }, "+1"),
		h("button", { key: _id ++, onClick: decrementCount }, "-1"),
		h("button", { key: _id ++, style: { fontWeight: "bold" }, onClick: resetCount }, "Reset"),
		h("button", { key: _id ++, onClick: handleModeClick }, SWITCH_TO[mode]),
	]);
};

ReactDOM.createRoot( document.getElementById("root") )
.render( h( Counter, { initialValue } ) );

// console.log("app.js BTM");
