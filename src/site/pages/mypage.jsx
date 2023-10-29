import EleventyContext from 'eleventy-plugin-react-ssr/context';
import { useContext } from 'react';

function MyPage() {
    // Access to anything from the data cascade, including page data
    // and Eleventy supplied data from https://www.11ty.dev/docs/data-eleventy-supplied/
    const { title, customData, page } = useContext(EleventyContext);

    return (
        <>
            <h1 className={customData.foo}>{title}</h1>
            <p>URL: {page.ur}</p>
        </>
    );
}

MyPage.data = {
    title: 'Hello world',
    customData: {
        foo: 'bar',
    },
};

export default MyPage;