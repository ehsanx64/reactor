// useDocumentTitle.js
import { useEffect } from 'react';

function useDocumentTitle(title: string) {
    // const defaultTitle = useRef(document.title);

    useEffect(() => {
        document.title = title;
    }, [title]);

    //   useEffect(() => () => {
    //     if (!prevailOnUnmount) {
    //       document.title = defaultTitle.current;
    //     }
    //   }, []);

    return;
}

export default useDocumentTitle;
