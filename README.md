<h1 align="center">My Portfolio Site</h1>

## URL
https://tsue-gatsby.web.app

## Features📎
1. Minimalistic display of portfolio items.
2. Auto-generated blog pages from Markdown files at blog folder.
3. Array of portfolio items, very easy to modify and very quick to add new items.
4. Gatsby-Config to change title.
5. Social Media links.
6. Responsive design with Sass.

## Web Performance Tests🕐
Lighthouse Report - [WebPageTest](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Ftsue-gatsby.web.app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext)
[![Image from Gyazo](https://i.gyazo.com/5f1267abf8300a93b40a4a039a25da46.png)](https://gyazo.com/5f1267abf8300a93b40a4a039a25da46)
## Quick Start🚀
### Create a Gatsby site
Use the Gatsby CLI to create a new site,
```sh
gatsby new <directory name> https://github.com/Akihide-Tsue/TsuePortfolio
```
### Start Developing
Navigate into your new site’s directory and start it up.
```sh
cd <directory name>
npm run develop
```
### Open the source code and start editing!
Your site is now running at `http://localhost:8000`!

Note: You'll also see a second link: `http://localhost:8000/___graphql`.
 This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

Open the `blog` directory in your code editor of choice and edit `src/templates/index-template.js`. Save your changes and the browser will update in real time!
### some notes about the config
You need to create a .env.development file, with the following env:
GATSBY_GRAPHQL_IDE=playground.
This will allow you to use Playground for your graphql IDE.
### Firebase Deploy
```sh
gatsby clean
gatsby build
firebase deploy
```