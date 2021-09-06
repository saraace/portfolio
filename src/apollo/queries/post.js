import { gql } from "@apollo/client";

export const getPost = (slug, preview, previewData) => {
  return gql`
  query PostBySlug {
    post(id: "${slug}", idType:SLUG) {
      title
      content
      slug
      tags(where: {orderby: TERM_ID}) {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      postFields {
        link {
          url
        }
        github {
          url
        }
      }
    }
  }`;
};
