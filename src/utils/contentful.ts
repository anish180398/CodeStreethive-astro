// lib/contentful.ts
import { createClient, Entry } from "contentful";

// Define types for your blog and insight entries
interface BlogPostFields {
  title: string;
  slug: string;
  publishDate: string;
  content: string;
}

interface InsightFields {
  title: string;
  description: string;
  publishDate: string;
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Function to fetch blog posts
export const getBlogs = async (): Promise<Entry<BlogPostFields>[]> => {
  try {
    const response = await client.getEntries<BlogPostFields>({
      content_type: "blogPost", // Replace with your Contentful content type
      order: "-fields.publishDate", // Sort by publish date
      limit: 10, // Adjust the number of posts as needed
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching blog entries:", error);
    return [];
  }
};

// Function to fetch insight posts
export const getInsights = async (): Promise<Entry<InsightFields>[]> => {
  try {
    const response = await client.getEntries<InsightFields>({
      content_type: "insight", // Replace with your Contentful content type for insights
      order: "-fields.publishDate", // Sort by publish date
      limit: 5, // Adjust the number of posts as needed
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching insight entries:", error);
    return [];
  }
};
