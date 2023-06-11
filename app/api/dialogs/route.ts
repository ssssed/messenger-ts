import { dialogs } from '@/utils/static-data';
import { NextResponse } from "next/server";


const handleGetDialogs = async (req: Request) => {
    return NextResponse.json({ dialogs });
}

export { handleGetDialogs as GET }