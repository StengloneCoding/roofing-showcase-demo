export type InquiryInput = {
  consentAccepted: boolean;
  email: string;
  honeypot?: string;
  interest?: string;
  message: string;
  name: string;
  phone?: string;
  sourcePage?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInquiryInput(input: InquiryInput) {
  if (input.honeypot) {
    return {
      valid: true,
    } as const;
  }

  if (!input.name.trim()) {
    return {
      message: "Bitte geben Sie einen Namen an.",
      valid: false,
    } as const;
  }

  if (!emailPattern.test(input.email.trim())) {
    return {
      message: "Bitte geben Sie eine gueltige E-Mail-Adresse an.",
      valid: false,
    } as const;
  }

  if (input.message.trim().length < 20) {
    return {
      message: "Bitte beschreiben Sie Ihr Anliegen etwas genauer.",
      valid: false,
    } as const;
  }

  if (!input.consentAccepted) {
    return {
      message: "Bitte bestaetigen Sie die Datenverarbeitung.",
      valid: false,
    } as const;
  }

  return {
    valid: true,
  } as const;
}
