// @flow

import I18n from 'i18n-js';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

// English language is the main language for fall back:

let languageCode = I18n.locale.substr(0, 2); 
let languageVI = "vi"

// console.log({languageCode})
I18n.defaultLocale = 'vi'
I18n.locale = 'vi'

I18n.translations[languageCode] = require(`./i18ns/${languageCode}.json`);
I18n.translations[languageVI] = require(`./i18ns/${languageVI}.json`);

// console.log(I18n.translations)