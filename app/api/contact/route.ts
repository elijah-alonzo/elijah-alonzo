import { NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/schemas"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactFormSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Invalid contact form payload",
          errors: parsed.error.flatten(),
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        message: "Message received successfully",
      },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      {
        message: "Invalid JSON body",
      },
      { status: 400 }
    )
  }
}
