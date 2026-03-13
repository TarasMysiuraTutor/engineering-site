import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const servicesDirectory = path.join(process.cwd(), "content/services");

export function getAllServices(locale: string) {
  const slugs = fs.readdirSync(servicesDirectory);

  return slugs.map((slug) => {
    const fullPath = path.join(servicesDirectory, slug, `${locale}.md`);

    if (!fs.existsSync(fullPath)) {
      throw new Error(`Service file not found: ${fullPath}`);
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
    };
  });
}

export function getAllServiceSlugs() {
  return fs.readdirSync(servicesDirectory);
}

export async function getServiceBySlug(slug: string, locale: string) {
  const fullPath = path.join(servicesDirectory, slug, `${locale}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Service file not found: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);


  return {
    slug,
    title: data.title,
    description: data.description,
    content: processedContent.toString(),
  };
}

// export async function getServiceBySlug(slug: string, locale: string) {
//   const fullPath = path.join(
//     servicesDirectory,
//     slug,
//     `${locale}.md`
//   )

//   if (!fs.existsSync(fullPath)) {
//     throw new Error(`Service file not found: ${fullPath}`)
//   }

//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   const { data, content } = matter(fileContents);

//   const processedContent = await remark().use(html).process(content);

//   return {
//     slug,
//     title: data.title,
//     description: data.description,
//     content: processedContent.toString(),
//   };
// }

// export async function getServiceBySlug(
//   slug: string,
//   locale: string
// ) {

//   const fileContents = fs.readFileSync(fullPath, "utf8")

//   const { data, content } = matter(fileContents)

//   return {
//     ...data,
//     content
//   }
// }
