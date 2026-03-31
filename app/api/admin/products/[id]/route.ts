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
    const { name, description, brand, category, badge, visible, sort_order } = body;

    await db.execute({
      sql: 'UPDATE products SET name = ?, description = ?, brand = ?, category = ?, badge = ?, visible = ?, sort_order = ? WHERE id = ?',
      args: [name, description || null, brand || null, category || null, badge || null, visible ? 1 : 0, sort_order || 0, Number(id)],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('PUT /api/admin/products/[id] error:', err);
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
      sql: 'DELETE FROM products WHERE id = ?',
      args: [Number(id)],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('DELETE /api/admin/products/[id] error:', err);
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
      sql: 'UPDATE products SET visible = CASE WHEN visible = 1 THEN 0 ELSE 1 END WHERE id = ?',
      args: [Number(id)],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('PATCH /api/admin/products/[id] error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
