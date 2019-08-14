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

### Deploy on WeDeploy

> :warning: WeDeploy platform has been shut down on April 22nd, 2019. Read this post to learn more about it: https://wedeploy.com/blog/discontinuing-wedeploy/

#### WeDeploy Button

Use the button below to instantly setup your own Server [google-translate-api](https://github.com/matheuss/google-translate-api) instance on WeDeploy.

[![Deploy](https://cdn.wedeploy.com/images/deploy.svg)](https://console.wedeploy.com/deploy?repo=https://github.com/brenopolanski/server-google-translate-api)

#### WeDeploy manually

1. Download the CLI:

   ```
   curl https://cdn.wedeploy.com/cli/latest/wedeploy.sh -sL | bash
   ```

2. Deploy Instantly:

   ```
   we deploy
   ```

3. Notice that this command will create a random name for your project. If you want to specify a new name or choose an existing project, you just need to run:

   ```
   we deploy -p myproject
   ```

See the documentation: https://wedeploy.com/docs/deploy/getting-started/

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
- [WeDeploy](https://wedeploy.com/)

## License

[MIT License](http://brenopolanski.mit-license.org/) © Breno Polanski
