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
    const { title, slug, perex, content, image_url, published } = body;

    await db.execute({
      sql: 'UPDATE posts SET title = ?, slug = ?, perex = ?, content = ?, image_url = ?, published = ? WHERE id = ?',
      args: [title, slug, perex || null, content || null, image_url || null, published ? 1 : 0, Number(id)],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('PUT /api/admin/posts/[id] error:', err);
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
      sql: 'DELETE FROM posts WHERE id = ?',
      args: [Number(id)],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('DELETE /api/admin/posts/[id] error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function PATCH(_request: Request, ctx: Ctx) {
  try {
    const session = await getSession();
    if (!session.isLoggedIn) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { id } = await ctx.params;

    await db.execute({
      sql: 'UPDATE posts SET published = CASE WHEN published = 1 THEN 0 ELSE 1 END WHERE id = ?',
      args: [Number(id)],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('PATCH /api/admin/posts/[id] error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
