import { db } from './db';

const tables = [
  `CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    perex TEXT,
    content TEXT,
    image_url TEXT,
    published INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  )`,
  `CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    brand TEXT,
    category TEXT,
    badge TEXT,
    visible INTEGER DEFAULT 1,
    sort_order INTEGER DEFAULT 0
  )`,
  `CREATE TABLE IF NOT EXISTS gallery (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    caption TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  )`,
  `CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    author TEXT NOT NULL,
    location TEXT,
    date TEXT,
    sort_order INTEGER DEFAULT 0,
    visible INTEGER DEFAULT 1
  )`,
  `CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    topic TEXT,
    message TEXT NOT NULL,
    read INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  )`,
  `CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT
  )`,
];

async function setup() {
  console.log('Creating tables...');

  for (const sql of tables) {
    await db.execute(sql);
  }

  console.log('All 6 tables created successfully.');
}

setup().catch((err) => {
  console.error('Database setup failed:', err);
  process.exit(1);
});
