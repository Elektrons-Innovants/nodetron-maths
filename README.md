# Mathematic Library for Robocup SSL

> :warning: **This library is in beta**: We can do breaking change every release.

This library is to create a minimal mathematical 2D library for our Robocup SSL Teams (NAELIC).

## How to install it ?

We have verdaccio at this [address](http://217.182.168.167:4873) :

> :warning: **Plan to move in another address**: For the moment, we don't have our own server, but soon we will plan to move in an address like this : naelic.fr or naelic.com.

So do this command is your repository :
```bash
npm install @nodetron/math --registry http://217.182.168.167:4873
```

## Publish on verdaccio

It is a bit complicated but soon we plan to do it automatically with CI.

```bash
npm run build
cp -r package.json dist/src

cd dist/src
npm publish --registry http://217.182.168.167:4873
```

## Documentation

We use the specification [tsdoc](https://tsdoc.org/) and the generation documentation tools [TypeDoc](https://typedoc.org/) to document our project.

### How to produce and see it ?

> npm run doc

The docs is created, open docs/index.html to see it.