# Arrange Your Jury Service

This is the first version of a digital prototype for the Jury Summons service. It is based around the [GOV.UK Prototyping Kit](https://github.com/alphagov/govuk_prototype_kit/blob/909509a077a1511f184989e7139bbaa52a1b1dc9/README.md) to help with the GOV.UK design patterns.

## Requirements

#### [Node](http://nodejs.org/)

You may already have it, try:

```
node --version
```

Your version needs to be at least v0.10.0.

If you don't have Node, download it here: [http://nodejs.org/](http://nodejs.org/).

## Getting started

Install Node.js (see requirements)

#### Clone this repo

```
git clone git@github.com:ministryofjustice/jury-summons-prototype.git
```

#### Install dependencies

```
npm install
bower install
```

This will install folders containing programs described by the package.json file to a folder called `node_modules` and any third party libraries into a folder called `bower_components`.

#### Run the app

```
node start.js
```

Go to [localhost:3000](http://localhost:3000) in your browser.

#### Hot reload

To view any code changes automatically in the browser without you restarting the app view it at [localhost:4000](http://localhost:4000).

The reload is controlled by [Browsersync](http://www.browsersync.io/).

## App structure

The main app is an [AngularJS](https://angularjs.org/) application. It is written using a combination of best practices described in this [blog post](https://scotch.io/tutorials/angularjs-best-practices-directory-structure) and techniques in a [styleguide](https://github.com/johnpapa/angular-styleguide#controllers) by [@john_papa](https://twitter.com/john_papa).

#### GOV.UK start page

A GOV.UK start page was mocked up to allow content to be tested during round of user research. This file can be found here `app/views/govuk-start-page.html` and has its own set of assets.

#### Debug toolbar

When developing locally a debug toolbar is present to allow you to quickly mock a login and populate the various possible paths:

- Accept
- Apply to delay
- Apply for excusal 

To set a custom list of jurors for a testing session you will need to add them under an environment variable named `JURORS`. If this is not set it will use a default dummy juror for debug actions.

For an example structure of the juror object see `jurors-sample.json`.

#### Hosting

The app is currenlty hosted on [Heroku](http://heroku.com/).

There is a [production environment](https://jury-prototype.herokuapp.com/) which is automatically deployed on changes to the `master` branch and a [development environment](https://jury-prototype-dev.herokuapp.com/) which is automatically deployed on changes to the `develop` branch.

Having two environments allows changes to be made to the development environment whilst the production environment might be being used for a user testing session.

The site may be protected by a username and password. If you have access to the heroku app these will be stored as environment variables and can be checked by running the command `heroku config` if you have the [heroku toolbelt](https://toolbelt.heroku.com/) installed.
