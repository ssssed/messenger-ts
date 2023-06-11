export interface IFetchUser {
    id: number;
    name: string;
    image: string;
    email: string;
    password: string;
}

export interface IFetchFeed {
    id: number;
    group_name: string;
    group_image: string;
    text: string;
    post_image: string;
    time: string;
}

export interface IFetchDialogs {
    id: number;
    image: string;
    name: string;
    lastname: string;
    lastmessage: string;
    count: number;
    time: string;
}