export default defineEventHandler((event) => {
  const origin = getRequestURL(event).origin
  const updatedAt = new Date().toISOString()

  const urls = [
    {
      loc: `${origin}/`,
      changefreq: 'weekly',
      priority: '1.0'
    }
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${updatedAt}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return body
})
