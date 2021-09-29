# Root Project

This repository contains A react typescript application

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before we get started, we're going to need to make sure we have a few things installed and available on our machine.

#### Node >= 12

##### MacOS

```bash
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

##### Other

See the installation guides available @ nodejs.org:

https://nodejs.org/en/download/package-manager/

#### Yarn

```bash
npm i -g yarn
```

### Installing

Below is a series of step by step instructions that tell you how to get a development env running.

Create a local clone of the repository

```bash
git clone git@github.com:dorny-mb/root_project.git
```

Enter the cloned repositories' directory

```bash
cd root_project
```

Install the projects dependencies

```bash
yarn
```

Create a `.env` file based on the [.env.example template](.env.example)

Export the contents of the created `.env` file to the current terminal session.

```bash
set -o allexport; source .env; set +o allexport
```

Make sure the `REACT_APP_DINOPARK_ENDPOINT` var is set in the `.env` file

Start the projects development server

```bash
yarn start
```

The project should now be available at http://localhost:3000

![login page](https://dorny-s-files.s3.amazonaws.com/Screenshot+2021-09-29+at+05.34.59.png)

### Approach

I built a matrix with the required number of rows and columns and filled in the data accordingly.

### What I would do differently if I had to do it again

- Improve the overall code structure (make it even more scalable) and design.
- I will have a more dynamic way of handleling most of the listed events.

### What you learned during the project

I really enjoyed creating basic logic frontend based solutions like this (it really got me thinking pretty deeply about some advanced data structures concepts 😅).

### How you think we can improve this challenge

- Including some direct interations in the UX such as the status details can be a pretty good addition to the chalenge.
- Implementing some sort of data polling system can also be a good idea so the data can automatically be refetched after a period of time.

## Authors

- **Dorny Muba** <dornymuba2016@gmail.com>

## Meta

| Version | Author                               | Date       |
| ------- | ------------------------------------ | ---------- |
| 0.0.1   | Dorny Muba <dornymuba2016@gmail.com> | 11/09/2021 |
