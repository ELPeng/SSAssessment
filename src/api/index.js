const url = "http://api.searchspring.net/api/search/search.json?siteId=scmq7n";

export const fetchProducts = async (query) => {
  let changeableUrl = url;
  // need to update to clean up query later
  if (query) {
    let changeableUrl = `${url}&q=${query}&resultsFormat=native`;
  }
};
