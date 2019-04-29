# Proof of Concept
## inject individual react components into scala-play to create a scala-typescript-react UI for a webapp's frontend

This project demonstrates a pattern for rendering individual react components in scala play. A reverse proxy makes it so that a JavaScript library, which is bundled on the fly by webpack-dev-server, is available on the window when in the scala-play app.

* used the scala-play hello world sample project
* jdk 1.8 or higher (using 12.0.1)
* sbt 0.13.15 or higher (recommended is 1.2.3)
* latest version of node
* latest version of npm
* docker

```
cd play-scala-hello-world-tutorial && sbt run
```
Next we run our Typescript, React project.

```
cd js-library && npm i && npm run dev
```

Then we start our reverse proxy.

Our reverse proxy setup is not generalizable or elegant. It is made specifically to work on mac and is proof-of-concept.

```
cd reverse-proxy && docker build -t reverseproxy . && docker-compose up -d
```
Open your browser at localhost:8080/1. You are looking at the scala play application, but the tabs are a react component that is defined in `js-library`.
