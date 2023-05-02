// index.js

console.time("READY");

// console.log("index.js TOP");

// typeof React === "object" ||
( (glo, isDev, useLiveReload) => {

	const CDN = "https://unpkg.com";
	const RVER = "@18";
	const RENV = isDev ? "development" : "production.min";

	const doc = document;
	const {head = doc.body} = doc;

	// instead of dealing with UNPREDICTABILITY of POST-LOAD "defer"/"async" https://flaviocopes.com/javascript-async-defer/
	// "These attributes only make sense when using the script in the head portion of the page,
	// " and they are useless if you put the script in the body footer like we saw above."

	const deps = scriptArray => {	// TODO: future might say "if FUNCTION then callback with previous module.exports" ???
// console.warn(scriptArray, scriptArray?.length);
		if(!scriptArray?.length)return;

glo.module = {};	// glo.module = { exports: {} };
if("exports" in glo.module)console.warn(glo.module);

		const script = head.appendChild(doc.createElement("script"));
		// script.defer = true;	// also no need for ".crossorigin" right? Because it refers to AUTHENTICATION ("anonymous" or "credentials")
		script.onload = () => deps(scriptArray);
		script.src = scriptArray.shift();

if("exports" in glo.module)console.warn(glo.module);

	};

	[...doc.querySelectorAll("noscript")].forEach( el => el.remove() );

	deps( [
		// `${CDN}/reaXct${RVER}/umd/react.${RENV}.js`,
		// `${CDN}/reXact-dom${RVER}/umd/react-dom.${RENV}.js`,
		`${CDN}/react${RVER}/umd/react.${RENV}.js`,
		`${CDN}/react-dom${RVER}/umd/react-dom.${RENV}.js`,
		"../app.js",
	].concat(
		isDev && useLiveReload ? `http://localhost:${35729}/livereload.js?snipver=1` :
		[]
	) );

} )(this
	, "isDev"
	, /[?&]live\b/i.test(location.search) && "useLiveReload"
);

// console.log("index.js BTM");
