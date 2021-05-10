import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';

import App from './App.web'

// Generate required css
import iconFont from 'react-native-vector-icons/dist/FontAwesome';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
} else {
    style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);

ReactDOM.render(<App />, document.getElementById('app'))
registerServiceWorker();
