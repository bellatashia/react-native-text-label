module.exports = {
  "globals": {    
   "fetch": false    
  },
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
       "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
       "react/destructuring-assignment": [0, 'never']
  }
};
