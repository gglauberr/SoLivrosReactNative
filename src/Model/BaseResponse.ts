export interface BaseResponse<TData>{
    Data: TData,
    Success: boolean,
    Message: string,
    ErrorDetails: string,
    IsError: boolean
}