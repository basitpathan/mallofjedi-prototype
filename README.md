# moj Prototype

Read the [GOV.UK Prototyping Kit](https://github.com/alphagov/govuk_prototype_kit).

## Requirements

#### [Node](http://nodejs.org/)

You may already have it, try:

```
node --version
```

Your version should be 4.2.2. (It also works with 0.12.7)

If you don't have Node, download it here: [http://nodejs.org/](http://nodejs.org/).

## Getting started

#### Install dependencies

Open a command line app (Terminal on OSX) and change to the unzipped directory. Then run:

```
npm install
```

This will install extra code that the prototype kit needs.

#### Run the app

```
node start.js
```

Go to [localhost:3000](http://localhost:3000) in your browser.

If you want to view multiple prototypes at the same time you can give them unique port numbers, like this:

```
PORT=3005 node start.js
```

To avoid conflicts we recommend using ports between 3000 and 3009. To change the port number permanently, edit the port variable in /server.js.

#### Hot reload

Any code changes should update in the browser without you restarting the app.

The app recompiles app/assets/stylesheets/application.scss everytime changes are observed.


## Heroku Deployment

#### Setup Remote - one time activity

Open a command line app (Terminal on OSX) and navigate to repo dir. Then run:

```
git remote add heroku git@heroku.com:moj-prototype.git
```

Check heroku remote is set:

```
git remote -v
```
shows heroku remote set
```
heroku	git@heroku.com:moj-prototype.git (fetch)
heroku	git@heroku.com:moj-prototype.git (push)
```

#### Deploy changes to Heroku

Make sure you push from up to date master branch:

```
git push heroku master
```

Go to [https://moj-prototype.herokuapp.com](https://moj-prototype.herokuapp.com) in your browser.

## Documentation

- [GOV.UK elements](http://govuk-elements.herokuapp.com)
- [GDS Design manual for designers](https://www.gov.uk/service-manual/designers)
