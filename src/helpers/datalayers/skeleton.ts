interface InfoDatalayer {
    (
        event?: string,
        category?: string,
        action?: string,
        label?: string,
        value?: string,
        pagePathDL?: string,
        coupon?: string,
        country?: string,
        brand?: string
    ): object
}

const getGtmArgs: InfoDatalayer = (
    event,
    category,
    action,
    label = "",
    value = "",
    PagePathDL = "",
    coupon = "",
    country = "",
    brand = "",
): object => {
    return {
        gtmId: process.env.NEXT_PUBLIC_GTM_ID,
        dataLayer: {
            event: event,
            eventCategory: category,
            eventAction: action,
            eventLabel: label,
            eventValue: value,
            PagePathDL: PagePathDL,
            eventCoupon: coupon,
            eventCountry: country,
            eventBrand: brand,
        }
    }
}

export default getGtmArgs;