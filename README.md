# News Article NLP

## Overview

This project takes a valid url article and provide sentiment analysis using Meaning Cloud (https://www.meaningcloud.com/)

## Add API Key from Meaning Cloud

- Please get a license key from https://www.meaningcloud.com/
- Add a file `.env` in project root directory and add API_KEY like below
  ```
  API_KEY=<license-key>
  ```

## Run locally production mode

1. Install [nodejs](https://nodejs.org/en/) if not present or use [Node Version Manager](https://github.com/nvm-sh/nvm)
2. Have used node version `v11.15.0` 
3. Run `npm install` to install all dependencies in command line
4. Run `npm run build-prod` to build application
5. Run `npm run start` to start application
6. Open http://localhost:8080 to view webpage

## Run locally development mode

1. Install [nodejs](https://nodejs.org/en/) if not present or use [Node Version Manager](https://github.com/nvm-sh/nvm)
2. Have used node version `v11.15.0`
3. Run `npm install` to install all dependencies in command line
4. Run `npm run build-dev` to build and open client in browser
5. Run `npm run start` to start server
6. Open http://localhost:8080 to view webpage

## Insert URL and observe Subjectivity

1. Run locally application as mentioned above
2. Insert a new article url (Example: https://www.bbc.com/sport/formula1/64965907)
3. Observe under Form Results [Subjectivity](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/response)
   shown (Wait for result to shown under Form Results, as the response can take time based on the model response time)