import { gql } from "@apollo/client";

export const getPosts = () => {
  return gql`
    query PostsQuery {
      posts {
        nodes {
          slug
          title
          featuredImage {
            node {
              title
              sourceUrl(size: _2048X2048)
            }
          }
          tags(where: { orderby: TERM_ID }) {
            nodes {
              name
            }
          }
        }
      }
    }
  `;
};

export const getAllPostSlugs = () => {
  return gql`
    query AllPostSlugsQuery {
      posts(first: 1000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `;
};
