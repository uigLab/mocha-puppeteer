
# Mocha Puppeteer

Basic testing of JavaScript apps with Mocha, Chai and Puppeteer. Here we use async and awit to call promise function to login facebook and take screenshot of our profile.

## Quick Start

### Install
```sh
git clone https://github.com/uigalaxy/mocha-puppeteer.git
cd mocha-puppeteer
yarn or npm install
```

### Usage

To make FACEBOOK credential create an `.env` file like `.env.example`. Now you’re good to go.


### Run Test

```sh
yarn test or npm test
```
Now you should see some test statements in your terminal like below. 

<p align='center'>
<img src='./screenshot.png' width='600' alt='npm start'>
</p>

And it generate a `timeline.png` from your facebook timeline in your project's root folder like below.

<p align='center'>
<img src='./timeline.png' width='600' alt='npm start'>
</p>

Head to `./test/puppeteer.test.js` and start to hack! Happy Coding!
