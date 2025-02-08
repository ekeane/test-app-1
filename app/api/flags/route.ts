import { NextResponse } from "next/server"
import { getFlags } from "../../getFlags"

export async function GET(request: Request) {
  const flags = await getFlags(request as any)
  return NextResponse.json(flags)
}

