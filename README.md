# Online Kramdown Editor

A version of @unindented's [Kramdown](http://kramdown.gettalong.org/) editor that runs on Windows, supports MathJax, and uses CodeMirror for its editor.

## Installing

If you have `bundler` installed, just run:

```sh
bundle install
```


## Testing

To run the tests, run the default `rake` task:

```sh
rake
```


## Running locally

To run the app locally, just execute:

```sh
foreman start
```


## Deploying to Heroku

To deploy to Heroku, first create an app:

```sh
heroku create --stack cedar <app name>
```

Then push the code:

```sh
git push heroku master
```

And the app will be ready to go!



## Credits

Thanks to Daniel Perez Alvarez ([unindented@gmail.com](mailto:unindented@gmail.com)) for the original project.
