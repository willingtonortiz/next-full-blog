import fs from "fs";
import path from "path";
import parseFrontMatter from "front-matter";
import { marked } from "marked";
import { Post, PostItem } from "../models/post.model";

const postsPath = path.join(__dirname, "../../..", "posts");

type BlogAttributes = {
  title: string;
};

export const getPosts = async (): Promise<PostItem[]> => {
  const dir = fs.readdirSync(postsPath);

  return Promise.all(
    dir.map(async (filename) => {
      const file = fs.readFileSync(path.join(postsPath, filename));
      const { attributes } = parseFrontMatter<BlogAttributes>(file.toString());

      return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
      };
    })
  );
};

export const getPost = async (slug: string): Promise<Post> => {
  const filepath = path.join(postsPath, slug + ".md");
  const file = fs.readFileSync(filepath);
  const { attributes, body } = parseFrontMatter<BlogAttributes>(
    file.toString()
  );

  const html = marked(body);

  return {
    slug,
    html,
    markdown: body,
    title: attributes.title,
  };
};
