# SearchSpring Take Home Assessment

## Invalid Search Handling

- For most search errors, I tried to keep consistent with the full implementation example.
- Empty searches will fetch all products .
- Special characters (!@#$%, etc.) will be cleaned from the search query.
- If only symbols are present in the search, it will be treated as an empty search and retrieve all products.
- If no product matches are found, the "No Products Found" component will be rendered.
