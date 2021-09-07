import { gql } from "@apollo/client";

export const getPage = (slug) => {
  return gql`
    query PageQuery {
        page(idType: URI, id: "${slug}") {
            slug
            content
            title
            featuredImage {
                node {
                    sourceUrl
                }
            }
        }
    } `;
};
