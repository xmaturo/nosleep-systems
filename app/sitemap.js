export default function sitemap() {
  const baseUrl = 'https://nosleepsystems.com';

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/cv`, lastModified: new Date() },
    { url: `${baseUrl}/notes`, lastModified: new Date() },
    { url: `${baseUrl}/quackery`, lastModified: new Date() },
    { url: `${baseUrl}/lab`, lastModified: new Date() },
  ];
}
