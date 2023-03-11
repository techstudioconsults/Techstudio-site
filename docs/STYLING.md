# Styleguide link

<!-- [FE Quality Control Docs](https://docs.google.com/document/d/1Sbq-ZC4O5477cx5cRuZKReVsdglABg7c585NAoZTHIU/edit) - For guidelines on how to contributeto the frontend. -->

# Styling in Techstudio Main

To avoid style clashes use scss modules when styling in Techstudio
for example

```js
// IS NOT VALID UNLESS REFERENCING A STYLE MADE AVAILABLE IN THE GLOBAL STYLESHEET
const TestComponent = () => {
  return <div style={`testComponentDiv`}></div>
}
export default TestComponent
```

```js
// IS VALID
import style from './styles.module.scss'

const TestComponent = () => {
  return <div style={`${style.testComponentDiv}`}></div>
}
export default TestComponent
```

OR

```js
// IS VALID
const TestComponent = () => {
  return <div style={[style.testComponentDiv].join(' ')}></div>
}
export default TestComponent
```

<!--

In the `webpack.config.js` modify to

```js
const { mergeWithRules } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react')

const mergeRules = {
  plugins: 'replace',
  devServer: {
    static: {
      directory: 'replace',
    },
  },
  module: {
    rules: {
      test: 'match',
      include: 'replace',
      exclude: 'replace',
      use: 'replace',
    },
  },
} -->

<!-- module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'techstudio',
    projectName: '{REPLACE WITH APPLICATION NAME}',
    webpackConfigEnv,
    argv,
  })

  return mergeWithRules(mergeRules)(defaultConfig, {
    //   OTHER WEBPACK RULES
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[local]--[hash:base64:5]__[name]',
                },
              },
            },
          ],
        },
      ],
    },
  }) -->

}

```

```
