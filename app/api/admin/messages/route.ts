import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await getSession();
    if (!session.isLoggedIn) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const result = await db.execute('SELECT * FROM messages ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error('GET /api/admin/messages error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
