export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export type User = {
    id: string,
    name: string
}

export type Posts = Post[]
