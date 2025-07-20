export interface Article {
  abstract: string;
  byline: {
    original: string;
  };
  document_type: string;
  headline: {
    main: string;
    kicker: string;
    print_headline: string;
  };
  _id: string;
  keywords: {
    name: string;
    value: string;
    rank: number;
  }[];
  multimedia: {
    caption: string;
    credit: string;
    default: {
      url: string;
      height: number;
      width: number;
    };
    thumbnail: {
      url: string;
      height: number;
      width: number;
    };
  };
  news_desk: string;
  print_page: string;
  print_section: string;
  pub_date: string; // ISO string
  section_name: string;
  snippet: string;
  source: string;
  subsection_name: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
}

export interface ListArticles {
  docs: Article[];
  metadata: {
    hits: number;
    offset: number;
    time: number;
  };
}
