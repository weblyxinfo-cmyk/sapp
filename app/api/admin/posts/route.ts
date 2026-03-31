import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

function slugify(text: string): string {
  const czech: Record<string, string> = {
    'ě': 'e', 'š': 's', 'č': 'c', 'ř': 'r', 'ž': 'z', 'ý': 'y',
    'á': 'a', 'í': 'i', 'é': 'e', 'ú': 'u', 'ů': 'u', 'ď': 'd',
    'ť': 't', 'ň': 'n', 'Ě': 'e', 'Š': 's', 'Č': 'c', 'Ř': 'r',
    'Ž': 'z', 'Ý': 'y', 'Á': 'a', 'Í': 'i', 'É': 'e', 'Ú': 'u',
    'Ů': 'u', 'Ď': 'd', 'Ť': 't', 'Ň': 'n',
  };
  return text
    .split('')
    .map((ch) => czech[ch] || ch)
    .join('')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function GET() {
  try {
    const session = await getSession();
    if (!session.isLoggedIn) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const result = await db.execute('SELECT * FROM posts ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error('GET /api/admin/posts error:', err);
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
    const { title, perex, content, image_url, published } = body;
    const slug = body.slug || slugify(title || '');

    if (!title) {
      return NextResponse.json({ error: 'Název je povinný' }, { status: 400 });
    }

    await db.execute({
      sql: 'INSERT INTO posts (title, slug, perex, content, image_url, published) VALUES (?, ?, ?, ?, ?, ?)',
      args: [title, slug, perex || null, content || null, image_url || null, published ? 1 : 0],
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error('POST /api/admin/posts error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
