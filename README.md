# Pintu Assesment - Irsan
> replicate pintu.co.id/market

try my best to replicate pintu.co.id as part of my assessment for Front End Engineer, wish me luck !

## Installing / Getting started

A quick introduction of the installation

```shell
git clone https://github.com/sanBastia/pintu-assessment-irsan.git
cd pintu-assesment-irsan
npm install  # god bless me...
npm run dev  # dear god....the only thing i had...
```

## Features

for about 2 - 3 hours a day, here is what i accomplished
* Fetch API PriceChange: https://api.pintu.co.id/v2/trade/price-changes
* Fetch API SupportedCurrencies: https://api.pintu.co.id/v2/wallet/supportedCurrencies
* You could search asset in search field
* You could sort by day, week, month, year
* You could sort latestPrice


## references

i have to admit that i've been done a lot of research, and try to look for other best practices, by looking this references that help me finish this project, its not copy and paste only, but i had to really understand, below is the list where i get those inspiration of

- inspiration for react query: https://github.com/developedbyed/next14-query-combo-cache-destroyer/tree/master/app
- understanding react query: https://www.dicoding.com/blog/dengan-react-query-data-fetching-tidak-lagi-pusing/
- fetch only one time: https://stackoverflow.com/questions/71282427/how-to-fetch-user-details-only-once
  - developed by ed has shown me an awesome tutorial, so i dig a little bit more too find out how to fetch only one time
- Sort and filter: https://medium.com/@Vaibhavihole31/building-search-filter-and-sorting-functionality-on-a-table-in-react-d3d38a73668a
  - i need to find a simple way to sort and filter (search) to do this project so i can tell or desrcibe to you better how this work
  

## problems

things i've been encountered during the development process, and i kinda solved some of them, but not all of them


- [x] CORS Error (https://www.youtube.com/watch?v=y4h2FArCMN0) 
solved by creating a single api, kinda inject the Access-Control-Allow-Origin with asterick


- [x] 2 different API with 2 response
solved by combining a response from the two different API, find something that could tie / match both, and i found that "pair" is the key, so by matching currencyGroup with split '/' "pair" , than we could combine both API response into one single data that we can use

- [] fill the SVG color
color svg not filled

- [x] refactor inline style for redgreenindicator
need to find a way to refactor css for day,week,month,year, at this moment inline style worked

- [x] refactor merging two RESPONSE API for one
need to find a way to refactor two response api for one single data, right now there is a longline of code in table component


## library

- [x] [shadcn](https://ui.shadcn.com/)
- [x] [react-query](https://tanstack.com/query/latest)
