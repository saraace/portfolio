import { gql } from "@apollo/client";

export const getPost = (slug) => {
	return gql`
  query PostBySlug {
    project(where: {slug: "${slug}"}) {
      title
      content {
        html
      }
      slug
      github_link
      project_link
      project_images {
        url
      }
      technologies {
        title
      }
      thumbnail_image {
        url
      }
    }
  }`;
};
