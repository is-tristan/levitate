import { appendFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const allowLogging =
        process.env.NODE_ENV === "development" ||
        process.env.GTM_DEBUG_LOG === "true";

    if (!allowLogging) {
        return NextResponse.json({ ok: false }, { status: 404 });
    }

    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ ok: false }, { status: 400 });
    }

    const dir = join(process.cwd(), "logs");
    await mkdir(dir, { recursive: true });
    const line = `${JSON.stringify({
        ...(body as Record<string, unknown>),
        receivedAt: new Date().toISOString(),
    })}\n`;
    await appendFile(join(dir, "gtm-debug.log"), line, "utf8");

    return NextResponse.json({ ok: true });
}
