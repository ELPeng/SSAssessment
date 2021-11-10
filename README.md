# SearchSpring Take Home Assessment

Website Link: https://serene-northcutt-db99f5.netlify.app/
Primary Frameworks/Libraries used: React, MaterialUI

## Invalid Search Handling

- For most search errors, I tried to keep consistent with the full implementation example.
- Empty searches will fetch all products .
- Special characters (!@#$%, etc.) will be cleaned from the search query.
- If only symbols are present in the search, it will be treated as an empty search and retrieve all products.
- If no product matches are found, the "No Products Found" component will be rendered.

## Error Handling with Response Data

- Some products did not appear to have any pricing data. I went ahead and changed the price display on the product card to "Sold Out" in those instances
- Some products had broken image urls - I uploaded a default photo to be used on error
