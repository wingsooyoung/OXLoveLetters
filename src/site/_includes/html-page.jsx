export function HTMLPage({ lang, children }) {
    return (
        <html lang={lang}>
            <head>/*this is the head area*/</head>
            <body>{children}</body>
        </html>
    );
}