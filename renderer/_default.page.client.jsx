import { hydrate, render } from "react-dom";
import { useClientRouter } from "vite-plugin-ssr/client/router";
import { PageShell } from "./PageShell";

const { hydrationPromise } = useClientRouter({
	render(pageContext) {
		const { Page, pageProps } = pageContext;
		const page = (
			<PageShell pageContext={pageContext}>
				<Page {...pageProps} />
			</PageShell>
		);
		const container = document.querySelector("#page-view");

		if (pageContext.isHydration) {
			setTimeout(() => {
				hydrate(page, container);
			}, 300);
		} else {
			setTimeout(() => {
				render(page, container);
			}, 300);
		}
		document.title = getPageTitle(pageContext);
	},
	onTransitionStart,
	onTransitionEnd,
});

hydrationPromise.then(() => {
	console.log("Hydration finished; page is now interactive.");
});

function onTransitionStart() {
	document
		.querySelector("#page-content")
		.classList.add("page-transition-start");

	document
		.querySelector("#page-content")
		.classList.remove("page-transition-end");

	document.querySelector("footer").classList.add("page-transition-start");

	document.querySelector("footer").classList.remove("page-transition-end");
}
function onTransitionEnd() {
	setTimeout(() => {
		document
			.querySelector("#page-content")
			.classList.remove("page-transition-start");

		document
			.querySelector("#page-content")
			.classList.add("page-transition-end");

		document.querySelector("footer").classList.remove("page-transition-start");

		document.querySelector("footer").classList.add("page-transition-end");
		window.scrollTo({ top: 0 });
	}, 400);
}

function getPageTitle(pageContext) {
	const title =
		// For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
		(pageContext.pageExports.documentProps || {}).title ||
		"George Nicolae Portfolio";
	return title;
}
