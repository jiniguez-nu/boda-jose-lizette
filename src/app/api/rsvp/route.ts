import { NextRequest, NextResponse } from 'next/server';
import { rsvpFormSchema } from '@/lib/validation';
import { sendRSVPConfirmation, sendRSVPToCouple } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = rsvpFormSchema.parse(body);

    // Send confirmation email to guest
    await sendRSVPConfirmation(validatedData, 'guest@example.com').catch((err) => {
      console.error('Failed to send confirmation email:', err);
      // Continue even if confirmation email fails
    });

    // Send notification email to couple
    await sendRSVPToCouple(validatedData).catch((err) => {
      console.error('Failed to send notification to couple:', err);
      // Continue even if notification fails
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Confirmación recibida correctamente',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('RSVP form error:', error);

    // Handle validation errors
    if (error instanceof Error && error.message.includes('validation')) {
      return NextResponse.json(
        {
          success: false,
          message: 'Datos inválidos en el formulario',
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Hubo un error al procesar tu confirmación',
      },
      { status: 500 }
    );
  }
}
