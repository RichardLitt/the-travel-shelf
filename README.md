# The Travel Shelf

> A magazine and index of beautiful global independent bookstores

## Install and usage

Built with a React front-end using Sass and a Node/Express backend
Persistent data stored in a MongoDB database hosted on mlab.com

The Database URI connection scheme is loaded as an environment variable named `MONGODB_URI`. In a local environment, the `MONGODB_URI` variable can be loaded from a `.env` file located in the root directory. To start, `touch .env` and then get a connection scheme URI from either your own database, or mLab, or by contacting @VernL.

Node version: v8.9.1.

Run `npm install` to install dependencies.

Run `npm run dev` to run app in development mode.

Finally, open http://localhost:3000 to view the app in the browser.

### Sass

To run Sass, use `npm run watch-css`.

### Testing

`npm run test`

## Contribute

Please contribute if you'd like. This is an open project. [Open an issue!](https://github.com/RichardLitt/the-travel-shelf/issues/new)

Please note that all interaction here conforms to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md)

## License

[MIT](LICENSE) © Richard Littauer and [Contributors](https://github.com/RichardLitt/the-travel-shelf/graphs/contributors).
