import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

type Ctx = { params: Promise<{ id: string }> };

export async function PUT(request: Request, ctx: Ctx) {
  try {
    const session = await getSession();
    if (!session.isLoggedIn) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { id } = await ctx.params;
    const body = await request.json();
    const { url, caption, sort_order } = body;

    await db.execute({
      sql: 'UPDATE gallery SET url = ?, caption = ?, sort_order = ? WHERE id = ?',
      args: [url, caption || null, sort_order || 0, Number(id)],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('PUT /api/admin/gallery/[id] error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(_request: Request, ctx: Ctx) {
  try {
    const session = await getSession();
    if (!session.isLoggedIn) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { id } = await ctx.params;

    await db.execute({
      sql: 'DELETE FROM gallery WHERE id = ?',
      args: [Number(id)],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('DELETE /api/admin/gallery/[id] error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
