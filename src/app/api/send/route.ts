import { NextResponse } from 'next/server';

import { Resend } from 'resend';

import { PERSONAL_INFO } from '@/constants/personal-info.constants';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: PERSONAL_INFO.CONTACT_INFO.EMAIL,
      subject: `Contact Form: ${subject}`,
      html: `
        <p>Email: ${email}</p>
        <p>Subject: ${subject}</p>
        <p>Message: ${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
