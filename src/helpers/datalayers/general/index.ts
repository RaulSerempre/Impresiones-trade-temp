import TagManager from 'react-gtm-module';
import getGtmArgs from '../skeleton';
const useDatalayer = () => {
    const datalayerValues = (
        event: string,
        category: string,
        action: string,
        label:string,
        value:string,
        PagePathDL: string,
        coupon: string,
        country: string,
        brand: string
        ) => TagManager.dataLayer(
            getGtmArgs(
                event,
                category,
                action,
                label,
                value,
                PagePathDL,
                coupon,
                country,
                brand
            )
        );

    return {
        datalayerValues,
    }
}

export default useDatalayer;