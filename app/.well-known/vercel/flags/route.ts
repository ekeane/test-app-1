import { NextResponse, type NextRequest } from "next/server"
import { verifyAccess, type ApiData } from "@vercel/flags"

export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get("Authorization"))
  if (!access) return NextResponse.json(null, { status: 401 })

  return NextResponse.json<ApiData>({
    definitions: {
      richTextEditing: {
        description: "Enables rich text editing features",
        origin: "https://example.com/#rich-text-editing",
        options: [
          { value: false, label: "Off" },
          { value: true, label: "On" },
        ],
      },
      darkMode: {
        description: "Enables dark mode for the app",
        origin: "https://example.com/#dark-mode",
        options: [
          { value: false, label: "Off" },
          { value: true, label: "On" },
        ],
      },
    },
  })
}

