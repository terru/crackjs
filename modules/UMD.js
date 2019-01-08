/**
 * Version UMD de gestión de modulos con js
 * Como CommonJs y AMD tenian la misma popularidad, surgió una alternativa
 * que maneja los dos patrones de ahi el nombre: Universal Module Definition.
 */

//UMD busca aunar y dar soporte a todos los metodos de exportación-importacion de modulos
//tener en cuenta que para cada caso los import serían equivalentes al patrón de modulos en cuestion
//amd define([],factoryfunc)
//commonJs require()
//window. + library_name

//en una funcion IIFE, se reciben el root object y la funcion factory
(function (root, factory) {
    //si esta definido define se toma amd pattern
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'underscore'], factory);
        //si esta definido exports es node o CommonJs    
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'), require('underscore'));
    } else {
        //setearlo en los browsers
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery, root._);
    }
}(this, function ($, _) {
    //se usa el revealing pattern para controlar lo que el modulo expone o no
    //    methods
    function a() { };    //    private because it's not returned (see below)
    function b() { };    //    public because it's returned
    function c() { };    //    public because it's returned

    //    exposed public methods
    return {
        b: b,
        c: c
    }
}));