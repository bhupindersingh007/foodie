import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    const res = await fetch(`${process.env.API_URL}/lookup.php?i=${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json();

    return Response.json(data);

};