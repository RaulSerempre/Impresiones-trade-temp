import { useEffect } from "react";
import TagManager from "react-gtm-module";

const useDatalayersConfig = (): void => {

    useEffect(() => {
        TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
    }, []);
}

export default useDatalayersConfig;