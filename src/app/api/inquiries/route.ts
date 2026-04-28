import { NextResponse } from "next/server";

import { validateInquiryInput, type InquiryInput } from "@/lib/inquiries";
import { getPayloadClient } from "@/lib/payload";

export async function POST(request: Request) {
  const body = (await request.json()) as InquiryInput;
  const validation = validateInquiryInput(body);

  if (!validation.valid) {
    return NextResponse.json(
      {
        message: validation.message,
        success: false,
      },
      { status: 400 },
    );
  }

  if (body.honeypot) {
    return NextResponse.json({
      success: true,
    });
  }

  try {
    const payload = await getPayloadClient();

    await payload.create({
      collection: "inquiries",
      data: {
        consentAccepted: body.consentAccepted,
        email: body.email.trim(),
        interest: body.interest?.trim(),
        message: body.message.trim(),
        name: body.name.trim(),
        phone: body.phone?.trim(),
        sourcePage: body.sourcePage?.trim(),
        status: "new",
      },
      overrideAccess: true,
    });

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      {
        message: "Die Anfrage konnte gerade nicht gespeichert werden.",
        success: false,
      },
      { status: 500 },
    );
  }
}
