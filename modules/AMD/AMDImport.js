/**
 * Importador segun patron AMD
 * @see ./AMDImport.js
 */

require(['dep1'], function (dep1) {
    dep1.msg(); //"AMD module sending message"
    dep1.msg2();//"AMD module sending message number 2"
  });