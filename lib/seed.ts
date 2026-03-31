import { db } from './db';
import seedData from '../data/seed.json';

async function seed() {
  console.log('Seeding database...');

  // Posts
  for (const post of seedData.posts) {
    await db.execute({
      sql: `INSERT OR IGNORE INTO posts (title, slug, perex, content, image_url, published)
            VALUES (?, ?, ?, ?, ?, ?)`,
      args: [post.title, post.slug, post.perex, post.content, post.image_url, post.published],
    });
  }
  console.log(`  Posts: ${seedData.posts.length} inserted`);

  // Products
  for (const product of seedData.products) {
    await db.execute({
      sql: `INSERT OR IGNORE INTO products (name, description, brand, category, badge, visible, sort_order)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
      args: [
        product.name,
        product.description,
        product.brand,
        product.category,
        product.badge,
        product.visible,
        product.sort_order,
      ],
    });
  }
  console.log(`  Products: ${seedData.products.length} inserted`);

  // Gallery
  for (const item of seedData.gallery) {
    await db.execute({
      sql: `INSERT OR IGNORE INTO gallery (url, caption, sort_order)
            VALUES (?, ?, ?)`,
      args: [item.url, item.caption, item.sort_order],
    });
  }
  console.log(`  Gallery: ${seedData.gallery.length} inserted`);

  // Reviews
  for (const review of seedData.reviews) {
    await db.execute({
      sql: `INSERT OR IGNORE INTO reviews (text, author, location, date, sort_order, visible)
            VALUES (?, ?, ?, ?, ?, ?)`,
      args: [review.text, review.author, review.location, review.date, review.sort_order, review.visible],
    });
  }
  console.log(`  Reviews: ${seedData.reviews.length} inserted`);

  // Settings
  for (const setting of seedData.settings) {
    await db.execute({
      sql: `INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)`,
      args: [setting.key, setting.value],
    });
  }
  console.log(`  Settings: ${seedData.settings.length} inserted`);

  console.log('Seeding complete.');
}

seed().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
