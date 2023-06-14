import { IFetchFeed } from "@/types";

export const getFeeds = async (): Promise<IFetchFeed[]> => {
    const response = await fetch(`${process.env.BASE_URL}/feeds`, {
        next: {
            revalidate: 10,
        }
    });

    if (response.status !== 200) {
        throw new Error("Unable to fetch feeds")
    }
    return response.json();
}