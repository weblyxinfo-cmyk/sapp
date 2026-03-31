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
    const result = await db.execute('SELECT * FROM gallery ORDER BY sort_order ASC, id DESC');
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error('GET /api/admin/gallery error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session.isLoggedIn) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const body = await request.json();
    const { url, caption, sort_order } = body;

    if (!url) {
      return NextResponse.json({ error: 'URL je povinná' }, { status: 400 });
    }

    await db.execute({
      sql: 'INSERT INTO gallery (url, caption, sort_order) VALUES (?, ?, ?)',
      args: [url, caption || null, sort_order || 0],
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error('POST /api/admin/gallery error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
