import { gql } from "@apollo/client";

export const getPost = (slug) => {
  return gql`
  query PostBySlug {
    post(id: "${slug}", idType:SLUG) {
      title
      content
      slug
      github
      projectLink
      images
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
    }
  }`;
};
