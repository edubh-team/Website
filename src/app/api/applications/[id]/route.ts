import { NextRequest, NextResponse } from 'next/server';
import { updateApplicationStatusFirestore } from '@/lib/firebase-db';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { status } = body;

    if (!status || !['pending', 'approved', 'rejected'].includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Invalid status. Must be pending, approved, or rejected.' },
        { status: 400 }
      );
    }

    const result = await updateApplicationStatusFirestore(id, status); // Use Firestore specific function
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Application status updated successfully'
      });
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
