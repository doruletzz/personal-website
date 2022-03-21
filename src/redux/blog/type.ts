export interface PostFetchError {
    message: string
}

export interface PostState {
    isFetching: boolean,
    isError: boolean,
    error: PostFetchError,
    posts: Array<IPost>
}

export type PostAction = {
    type: string
    data: Array<IPost>
  }

export interface IPost {
    id : number,
    slug : string,
    title: string,
    summary: string,
    content: string,
    user: string,
    createdAt?: Date | undefined,
    updatedAt?: Date | undefined,
}

