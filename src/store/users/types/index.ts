export interface User{
    id: number
    email: string
    firstName: string
    lastName: string

}

export interface InitialStateUsers {
    data: User[]
    loading: boolean
    error: null | string
}