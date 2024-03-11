import contentful from "contentful";
import type { EntryFieldTypes } from "contentful";

export interface BlogPost {
	contentTypeId: "blogPost";
	fields: {
		title: EntryFieldTypes.Text;
		content: EntryFieldTypes.RichText;
		date: EntryFieldTypes.Date;
		description: EntryFieldTypes.Text;
		slug: EntryFieldTypes.Text;
	};
}

export type Work = {
	title?: string;
	slug?: string;
	featuredImg?: FeaturedImg;
	albumCategory?: AlbumCategory;
};

export type AlbumCategory = {
	fields?: AlbumCategoryFields;
};

export type AlbumCategoryFields = {
	title?: string;
	slug?: string;
};

export type FeaturedImg = {
	fields?: FeaturedImgFields;
};

export type FeaturedImgFields = {
	title?: string;
};

export const contentfulClient = contentful.createClient({
	space: import.meta.env.CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.DEV
		? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
		: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
	host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
