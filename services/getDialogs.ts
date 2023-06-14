import { IFetchDialogs } from "@/types";

export const getDialogs = async (): Promise<{ dialogs: IFetchDialogs[] }> => {
    const response = await fetch(`/api/dialogs`, {
        next: {
            revalidate: 10
        }
    })

    if (!response.ok) throw new Error("Unable to fetch dialogs")

    return response.json();
}