export type Page = {
  pageId: string;
  pageName: string;
  imageUrl: string;
  pageSummary: string;
  tags: string;
  publishedOn: string;
};

export interface BlogpostProps {
  params: {
    id: string;
  };
  searchParams: {
    title: string;
    publishedOn: string;
    imageUrl: string;
  };
}
