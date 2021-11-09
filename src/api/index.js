const url = "http://api.searchspring.net/api/search/search.json?siteId=scmq7n";

export const fetchSearchData = async (query) => {
  let changeableUrl = url;
  // need to update to clean up query later
  if (query) {
    changeableUrl = `${url}&q=${query}&resultsFormat=native`;
    try {
      const response = await fetch(changeableUrl);
      const { results } = await response.json();

      if (!results.length) return `No products found for ${query}...`;
      console.log(results);
      return results;
    } catch (error) {
      return error;
    }
  }
};

export const fetchPageData = async (query, page) => {
  let changeableUrl = url;
  // need to update to clean up query later
  if (query) {
    changeableUrl = `${url}&q=${query}&resultsFormat=native&page=${page}`;
    try {
      const response = await fetch(changeableUrl);
      const { results } = await response.json();

      if (!results.length) return `No products for ${query}`;
      console.log(results);
      return results;
    } catch (error) {
      return error;
    }
  }
};

export const fetchPagination = async (query) => {
  let changeableUrl = url;
  // need to update to clean up query later
  if (query) {
    changeableUrl = `${url}&q=${query}&resultsFormat=native}`;
    try {
      const response = await fetch(changeableUrl);
      const {
        pagination: { totalPages },
      } = await response.json();
      if (!totalPages) return null;
      console.log(totalPages);
      return totalPages;
    } catch (error) {
      return error;
    }
  }
};
