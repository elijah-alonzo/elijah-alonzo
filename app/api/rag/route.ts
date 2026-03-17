import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    {
      message: "RAG endpoint is not configured yet.",
    },
    { status: 501 }
  )
}
