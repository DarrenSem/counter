// index.js

console.time("READY");

( (glo, isDev, useLiveReload) => {

	const CDN = "https://unpkg.com";
	const RVER = "@18";
	const RENV = isDev ? "development" : "production.min";

	const doc = document;
	const {head = doc.body} = doc;

	const deps = scriptArray => {
		if(!scriptArray?.length)return;
		const script = head.appendChild(doc.createElement("script"));
		script.onload = () => deps(scriptArray);
		script.src = scriptArray.shift();
	};

	[...doc.querySelectorAll("noscript")].forEach( el => el.remove() );

	deps( [
		`${CDN}/react${RVER}/umd/react.${RENV}.js`,
		`${CDN}/react-dom${RVER}/umd/react-dom.${RENV}.js`,
		"../app.js",
	].concat(
		isDev && useLiveReload ? `http://localhost:${35729}/livereload.js?snipver=1` :
		[]
	) );

} )(this
	, "isDev"
// 	, /[?&]live\b/i.test(location.search) && "useLiveReload"
);
