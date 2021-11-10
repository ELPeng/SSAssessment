const url = "http://api.searchspring.net/api/search/search.json?siteId=scmq7n";

// Fetch search results and retrieve pagination prop
export const fetchPageData = async (query, page) => {
  // Checks for empty search after cleaning url
  let filteredQuery = query.replace(/[^a-zA-Z ]/g, "");
  let changeableUrl = filteredQuery
    ? `${url}&q=${filteredQuery}&resultsFormat=native&page=${page}`
    : `${url}&resultsFormat=native&page=${page}`;
  try {
    const response = await fetch(changeableUrl);
    const { results, pagination } = await response.json();
    if (!results.length) return { results: null, pagination };
    return { results, pagination };
  } catch (error) {
    return error;
  }
};

// Fetch pagination data
export const fetchPagination = async (query) => {
  let filteredQuery = query.replace(/[^a-zA-Z ]/g, "");
  let changeableUrl = `${url}&q=${filteredQuery}&resultsFormat=native}`;
  try {
    const response = await fetch(changeableUrl);
    const { pagination } = await response.json();
    if (!pagination.totalPages) return null;
    return pagination;
  } catch (error) {
    return error;
  }
};
