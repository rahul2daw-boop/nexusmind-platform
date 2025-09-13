import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ message: "NexusMind API Ready", status: "success", platform: "NexusMind - Created by Rahul Vishwanath Dawkhar" })
}
