import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const session = await getSession();
      session.isLoggedIn = true;
      session.username = username;
      await session.save();

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: 'Nesprávné přihlašovací údaje' },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Chyba při zpracování požadavku' },
      { status: 400 }
    );
  }
}
