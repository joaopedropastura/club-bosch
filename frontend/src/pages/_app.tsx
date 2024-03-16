import { AppProps } from "next/app";

const App = ({Component, pageProps} : AppProps) => {
    return (
        <>
            <h1>lkalalala</h1>
            <Component {...pageProps} />
        </>

    );
}


export default App;