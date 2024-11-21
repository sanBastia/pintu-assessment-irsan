# Pintu Assesment - Irsan
> replicate pintu.co.id/market

try my best to replicate pintu.co.id as part of my assessment for Front End Engineer, wish me luck !

## Live Demo

[Pintu Assessment irsan](https://pintu-assessment-irsan.vercel.app/)

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
- CORS error: https://www.youtube.com/watch?v=y4h2FArCMN0
  

## problems

things i've been encountered during the development process, and i kinda solved some of them, but not all of them

<dl>
    <dt>CORS Error</dt>
    <dd> if i access the api directly from the browser. it worked ! but when i try to access it from my app it cause error and broke. if i had the access to the API ( BACKEND TEAM) i could just say "hei could you please allow all",thanks, but i was not. so luckyly i'm use next js.  solved by creating a single api, kinda inject the Access-Control-Allow-Origin with asterick
    </dd>
</dl>

<dl>
    <dt>2 different API with 2 response</dt>
    <dd>after look at the assesment, and comparing to the pintu.co.id/market, i realise that both response API not really straight forward, so i had to connect the dot, find a way to somehow combine , merge, pick a few data for the assesment. and i found it, pair matching with currencyGroup. solved it by modified response from both API and make it happen
    </dd>
</dl>

<dl>
    <dt>logo svg color</dt>
    <dd>this is one of those things that i spend too much time trying to solved it, almost broke the app, so the API has give a nice url logo with .svg, it worked beautifully thanks to dev team from PINTU, but i was stupid enough just display it, not be able to color it, cause the response also give me a 'color' so i could just 'fill'. so this one is not solved
    </dd>
</dl>

<dl>
    <dt>Red And Green indicator</dt>
    <dd>by understanding KISS , which KEEP IT SIMPLE AND STUPID, i managed to make day, week, month, year had a nice red color and green color, also with arrow up and arrow down. but somehow i need to refactor it. cause it look ugly. just repeat those code 4 times. then i solved it by create a component. and voilaa ! its solved
    </dd>
</dl>

## library

- [x] [shadcn](https://ui.shadcn.com/)
- [x] [react-query](https://tanstack.com/query/latest)
