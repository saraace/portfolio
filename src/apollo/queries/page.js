import { gql } from "@apollo/client";

export const getPage = (slug) => {
	return gql`
    query PageQuery {
        page(where: {slug: "${slug}"}) {
            id
            title
            slug
            content {
              html
            }
            featured_image {
              url
            }
          }
          settings(where: {key: "resume"}) {
            value
          }
    } `;
};
