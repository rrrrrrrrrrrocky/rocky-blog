import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  console.log(
    "🚀 ~ file: markdownToHtml.ts ~ line 6 ~ markdownToHtml ~ html",
    html
  );
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
