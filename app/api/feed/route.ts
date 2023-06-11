import { IFetchFeed } from "@/types";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

  try {
    const response = await fetch(`${process.env.BASE_URL}/feeds`);
    if (response.status === 200) {
      const data: IFetchFeed[] = await response.json();
      return NextResponse.json(data);
    }
  } catch (err) {
    return NextResponse.json({ message: err });
  }

}
