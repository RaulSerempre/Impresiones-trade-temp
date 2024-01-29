export interface InfoDatalayer {
    (
        event?: string,
        category?: string,
        action?: string,
        label?: string,
        value?: string,
        coupon?: string,
        country?: string,
        brand?: string
    ): object
}

export interface TagManagerArgs {
    gtmId?: string
}
