# PINTU ASSESMENT IRSAN

## TODO

- [x] make it deploy (vercel)
- [x] installing shadcn
- [x] fetch PINTU api
- [ ] layouting header
- [ ] layouting body
- [ ] table for sorting


## library

[x] [shadcn](https://ui.shadcn.com/)
[x] [react-query](https://tanstack.com/query/latest)



## problems

- [x] CORS Error 
solved by creating a single api, kinda inject the Access-Control-Allow-Origin with asterick

https://www.youtube.com/watch?v=y4h2FArCMN0

- [x] 2 different API with 2 response
solved by combining a response from the two different API, find something that could tie / match both, and i found that "pair" is the key, so by matching currencyGroup with split '/' "pair" , than we could combine both API response into one single data that we can use


## references

// inspiration for react query
developed by ed - https://github.com/developedbyed/next14-query-combo-cache-destroyer/tree/master/app

// understanding react query
dicoding - https://www.dicoding.com/blog/dengan-react-query-data-fetching-tidak-lagi-pusing/

// fetch only one time
https://stackoverflow.com/questions/71282427/how-to-fetch-user-details-only-once

// sort filter 
https://medium.com/@Vaibhavihole31/building-search-filter-and-sorting-functionality-on-a-table-in-react-d3d38a73668a