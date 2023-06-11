import { IFetchDialogs } from "@/types";
import { headers as Headers } from "next/headers";

export const getDialogs = async (): Promise<{ dialogs: IFetchDialogs[] }> => {
    const headers = Headers();
    const response = await fetch(`http://${headers.get("host")}/api/dialogs`, {
        next: {
            revalidate: 10
        }
    })

    if (!response.ok) throw new Error("Unable to fetch dialogs")

    return response.json();
}