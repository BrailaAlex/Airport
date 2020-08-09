module.exports = {
  extends: ["airbnb", "prettier"],
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    "no-console": 0,
    "import/prefer-default-export": 0,
    "react/jsx-indent": 0,
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    "react/jsx-indent-props": 0,
  },
};
