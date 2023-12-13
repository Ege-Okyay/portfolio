import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const projects = await getCollection("projects");
  return rss({
    title: "Ege Okyay's Projects",
    description: "my projects",
    site: context.site,
    items: projects.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      content: sanitizeHtml(parser.render(post.body)),
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/projects/[slug]` routes
      link: `/projects/${post.slug}/`,
    })),
  });
}
