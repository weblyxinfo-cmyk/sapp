import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.sapp.cz', changeFrequency: 'weekly', priority: 1 },
    { url: 'https://www.sapp.cz/spotrebice', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.sapp.cz/kuchyne', changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.sapp.cz/servis', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.sapp.cz/akce', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.sapp.cz/fotogalerie', changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://www.sapp.cz/kontakt', changeFrequency: 'monthly', priority: 0.7 },
  ];
}
