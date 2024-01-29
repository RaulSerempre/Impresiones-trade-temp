export interface IAction {
    (
        iso_code: string, 
        filter:string,
        onSuccess: () => void,
        onError: (error: any) => void
    ): void
}