pug-frontmatter-html-loader
===========================

  > Webpack loader for rendering pug to html with frontmatter support.

---

[![npm package version](https://img.shields.io/npm/v/pug-frontmatter-html-loader.svg?style=flat-square)](https://www.npmjs.com/package/pug-frontmatter-html-loader)
[![Travis CI build status](https://travis-ci.org/simbo/pug-frontmatter-html-loader.svg?branch=master)](https://travis-ci.org/simbo/pug-frontmatter-html-loader/builds)


About
-----

`pug-frontmatter-html-loader` is a [webpack](https://webpack.js.org/) loader.
It renders [pug](https://pugjs.org/) templates to HTML using template data from
optional yaml frontmatter parsed with
[gray-matter](https://github.com/jonschlinkert/gray-matter).

Simple example pug template with frontmatter:

``` pug
---
content: "Hello World"
---
p= content
```


This gives you a convenient way to define more complex template data directly in
your template file. As frontmatter usage is optional, this can also be used as a
plain *pug to html* loader.


Installation
------------

`pug-frontmatter-html-loader` is a public npm package. You can install it using
npm:

``` sh
npm i -D pug-frontmatter-html-loader
```


Usage
-----

Simply add it as a loader in your webpack config's module rules:

``` js
{
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-frontmatter-html-loader']
      }
    ]
  }
}
```

This loader outputs strings. If you want to use them in javascript context,
prepend the [raw-loader](https://github.com/webpack-contrib/raw-loader) to your
loader chain.


Options
-------

See [pug compiler options](https://pugjs.org/api/reference.html#options).


License
-------

[MIT @ 2018 Simon Lepel](http://simbo.mit-license.org/)
