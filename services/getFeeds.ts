import { IFetchFeed } from "@/types";

export const getFeeds = async (): Promise<IFetchFeed[]> => {
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/feed`, {
        cache: 'no-store',
        next: {
            revalidate: 0
        }
    });

    if (!response.ok) {
        throw new Error("Unable to fetch feeds")
    }
    return response.json();
}