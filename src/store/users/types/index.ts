export interface User{
    id: number
    email: string

}

export interface InitialStateUsers {
    data: User[]
    loading: boolean
    error: null | string
}