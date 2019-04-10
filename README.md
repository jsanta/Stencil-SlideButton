![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Generated using the Stencil Component Starter project

This component was generated using the Stencil starter project for building a standalone Web Components.

# Stencil Slide Button
The Stencil Slide button component is basicaly a slide to unlock component. You'll find many on the web ([believe me, here are the Google results](https://www.google.cl/search?q=javascript+slide+to+unlock+component&oq=javascript+slide+to+unlock+component))

For further information refer to the Stencil documentation at: https://stenciljs.com/docs/introduction

# Available branches
Currently there are 2 available branches for this component:
* [master](https://github.com/jsanta/Stencil-SlideButton) : Which has the generic slide button Web component.
* [ionic-slide](https://github.com/jsanta/Stencil-SlideButton/tree/ionic-slide): Which has an Ionic slide button Web component (with Ionic styles and components).

Also, there's a Ionic Slide Button example app at https://github.com/jsanta/ionic-slidebtn-app

# Running 
Execute:  
`npm run start`

# Compilation and packaging
In the folder where this project code was downloaded execute the following commands:
```
rm *-slide-button*.tgz
npm build
npm run pack
```
This will:
1. Delete any packaged distribution for this component
2. Build the web component
3. Pack the web component to a `tgz` file acording to the version and name configured on the `package.json` file

# Installation
* Go to https://github.com/jsanta/Stencil-SlideButton/releases
* Select the desired release (currently 2 options, Slide button Web component or Slide button Ionic component)
* Download the <release>-slide-button-<version>.tgz file (lets say `ionic-slide-button-1.0.0.tgz` where *ionic* is the release and *1.0.0* is the version)
* Copy the tgz file to your project's main folder
* Inside your project's main folder execute `npm install --save ./ionic-slide-button-1.0.0.tgz` (remember to change the tgz filename if necessary).


