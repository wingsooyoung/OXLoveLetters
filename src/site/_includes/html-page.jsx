export function HTMLPage({ lang, children }) {
    return (
        <html lang={lang}>
            <head>{/* Link to styles, scripts, etc. */}</head>
            <body>{children}</body>
        </html>
    );
}