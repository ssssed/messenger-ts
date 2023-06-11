import { IFetchFeed } from "@/types";
import { headers as Headers } from "next/headers";

export const getFeeds = async (): Promise<IFetchFeed[]> => {
    const headers = Headers();
    const response = await fetch(`http://${headers.get("host")}/api/feed`, {
        next: {
            revalidate: 10
        }
    });

    if (!response.ok) {
        throw new Error("Unable to fetch feeds")
    }
    return response.json();
}