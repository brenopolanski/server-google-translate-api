# Server [google-translate-api](https://github.com/matheuss/google-translate-api)

> A simple server using a free and unlimited API for Google Translate.

## Getting Started

### Installation

Install [NodeJS](http://nodejs.org/) if you don't have it yet.

```bash
# Clone this repository
$ git clone git@github.com:brenopolanski/server-google-translate-api.git
$ cd server-google-translate-api

# install dependencies
$ yarn (or npm i)
# run the server
$ yarn start (or npm start)
```

### How to use the `Dockerfile` :whale:

You can then build and run the Docker image:

```sh
$ docker build -t server-google-translate-api .
$ docker run -d server-google-translate-api
```

## Endpoint

- **[POST]** `/translate`

  - *header*: `{ "Content-Type": "application/json" }`

  - *body*: `{ "text": "I speak English", "from": "en", "to": "pt" }`

## Contributing

If you want to help, please read the [Contributing](https://github.com/brenopolanski/server-google-translate-api/blob/master/CONTRIBUTING.md) guide.

## History

For detailed changelog, see [Releases](https://github.com/brenopolanski/server-google-translate-api/releases).

## Credits

- [google-translate-api](https://github.com/matheuss/google-translate-api)

## License

[MIT License](https://brenopolanski.mit-license.org/) © Breno Polanski
