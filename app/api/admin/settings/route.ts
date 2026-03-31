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
    const result = await db.execute('SELECT * FROM settings');
    const settings: Record<string, string> = {};
    for (const row of result.rows) {
      settings[row.key as string] = (row.value as string) || '';
    }
    return NextResponse.json(settings);
  } catch (err) {
    console.error('GET /api/admin/settings error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getSession();
    if (!session.isLoggedIn) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const body: Record<string, string> = await request.json();

    for (const [key, value] of Object.entries(body)) {
      await db.execute({
        sql: 'INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)',
        args: [key, value],
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('PUT /api/admin/settings error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
