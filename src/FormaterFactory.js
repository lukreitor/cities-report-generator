// src/FormaterFactory.js
import FormaterHTML from './FormaterHTML.js';
import FormaterTXT from './FormaterTXT.js';

export default class FormaterFactory {
  static createFormater(type) {
    switch (type) {
      case 'html':
        return new FormaterHTML();
      case 'txt':
        return new FormaterTXT();
      default:
        throw new Error('Unknown formater type');
    }
  }
}
