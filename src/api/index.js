const url = "http://api.searchspring.net/api/search/search.json?siteId=scmq7n";

export const fetchPageData = async (query, page) => {
  let changeableUrl = url;
  let filteredQuery = query.replace(/[^a-zA-Z ]/g, "");
  //   need to update to clean up query later

  changeableUrl = filteredQuery
    ? `${url}&q=${filteredQuery}&resultsFormat=native&page=${page}`
    : `${url}&resultsFormat=native&page=${page}`;
  try {
    const response = await fetch(changeableUrl);
    const { results, pagination } = await response.json();

    if (!results.length) return { results: null, pagination };
    console.log({ results });
    return { results, pagination };
  } catch (error) {
    return error;
  }
};

export const fetchPagination = async (query) => {
  let changeableUrl = url;
  // need to update to clean up query later
  changeableUrl = `${url}&q=${query}&resultsFormat=native}`;
  try {
    const response = await fetch(changeableUrl);
    const { pagination } = await response.json();
    if (!pagination.totalPages) return null;
    console.log({ pagination });
    return pagination;
  } catch (error) {
    return error;
  }
};
