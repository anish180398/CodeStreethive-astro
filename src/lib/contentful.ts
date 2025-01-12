import * as contentful from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export const renderRichTextToHtml = (richText: any) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        // In Contentful, the image URL might be nested differently
        const url = node.data.target.fields.file?.url;
        if (!url) {
          return "";
        }
        // Make sure to add https: if the URL starts with //
        const fullUrl = url.startsWith("//") ? `https:${url}` : url;
        return `<img src="${fullUrl}" alt="${node.data.target.fields.description || ""}" class="my-4 rounded-lg" />`;
      },
    },
  };

  return documentToHtmlString(richText, options);
};
