import { gql } from "@apollo/client";

export const getPosts = () => {
	return gql`
		query PostsQuery {
			projects(orderBy: createdAt_ASC) {
				slug
				title
				thumbnail_image {
					url
				}
				technologies {
					title
				}
			}
		}
	`;
};

export const getAllPostSlugs = () => {
	return gql`
		query AllPostSlugsQuery {
			projects(first: 1000) {
				slug
			}
		}
	`;
};
