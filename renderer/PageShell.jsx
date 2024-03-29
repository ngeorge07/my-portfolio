import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./scss/PageShell.scss";
import { PageContextProvider } from "./usePageContext";

import Header from "./Header";
import Footer from "./Footer";
import LoadingScreen from "../components/LoadingScreen";

export { PageShell };

function PageShell({ pageContext, children }) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 500);
	}, []);

	return (
		<>
			{loading === false ? (
				<React.StrictMode>
					<PageContextProvider pageContext={pageContext}>
						<Header />
						<Content>{children}</Content>
						<Footer />
					</PageContextProvider>
				</React.StrictMode>
			) : (
				<LoadingScreen />
			)}
		</>
	);
}

function Content({ children }) {
	return <main id="page-content">{children}</main>;
}
