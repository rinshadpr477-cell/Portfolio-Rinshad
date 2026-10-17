import { NextRequest, NextResponse } from 'next/server';

interface ContactRequestBody {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactRequestBody;
    const { name, email, projectType, budget, timeline, description } = body;

    // Strict validation
    if (!name?.trim() || !email?.trim() || !description?.trim()) {
      return NextResponse.json(
        { error: 'Please provide your name, valid email address, and project overview.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Construct Mailto fallback URL
    const subject = encodeURIComponent(`Project Inquiry: ${projectType || 'Full-Stack Engineering'} from ${name}`);
    const mailtoBody = encodeURIComponent(
      `Hi Rinshad,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nBudget Range: ${budget}\nTimeline: ${timeline}\n\nProject Scope:\n${description}\n\nLooking forward to speaking.`
    );
    const fallbackMailto = `mailto:rinshadpr477@gmail.com?subject=${subject}&body=${mailtoBody}`;

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'rinshadpr477@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'portfolio@resend.dev';

    // If Resend API key is configured
    if (resendKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: fromEmail,
            to: toEmail,
            reply_to: email,
            subject: `New Lead: ${name} (${projectType || 'Engineering'})`,
            html: `
              <h2>New Portfolio Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Project Type:</strong> ${projectType}</p>
              <p><strong>Budget:</strong> ${budget}</p>
              <p><strong>Timeline:</strong> ${timeline}</p>
              <hr />
              <h3>Description:</h3>
              <p style="white-space: pre-wrap;">${description}</p>
            `,
          }),
        });

        if (resendRes.ok) {
          return NextResponse.json({
            delivered: true,
            message: 'Your message has been sent successfully directly to Rinshad.',
          });
        }
      } catch (e) {
        // Fall back to mailto if delivery failed
      }
    }

    // Honest Fallback: Inform client that RESEND_API_KEY is not yet bound
    return NextResponse.json({
      delivered: false,
      fallbackMailto,
      message:
        'Direct server SMTP is currently in test mode. We have pre-filled your inquiry into an instant mail draft ready to send.',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred processing the contact form submission.' },
      { status: 500 }
    );
  }
}
