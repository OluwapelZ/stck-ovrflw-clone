'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 *  Convert object attribute to snake case
 * @param modelObject
 * @param mapFn
 */
var snakeCaseObjectMap = exports.snakeCaseObjectMap = function snakeCaseObjectMap(modelObject, mapFn) {
    var object = Object.assign({}, modelObject);
    return Object.keys(object).reduce(function (result, key) {
        if (object[key] && !containsNumber(key)) {
            result[snakeCase(key)] = mapFn(object[key]);
        } else if (object[key] == 0) {
            result[snakeCase(key)] = mapFn(object[key]);
        } else {
            result[key] = object[key];
        }
        return result;
    }, {});
};

/**
* Convert object attribute to camel case
* @param modelObject
* @param mapFn
*/
var camelCaseObjectMap = exports.camelCaseObjectMap = function camelCaseObjectMap(modelObject, mapFn) {
    var object = Object.assign({}, modelObject);
    return Object.keys(object).reduce(function (result, key) {
        var value = mapFn(object[key]);

        if (value && Array.isArray(value) && value.length) {
            value = value.map(function (eachValue) {
                return camelCaseObjectMap(eachValue, mapFn);
            });
        } else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && Object.keys(value).length) {
            value = camelCaseObjectMap(value, mapFn);
        }
        result[camelCase(key)] = value;

        return result;
    }, {});
};

/**
 * Validate email address
 * @param email  
 */
var emailIsValid = exports.emailIsValid = function emailIsValid(email) {
    return (/\S+@\S+\.\S+/.test(email)
    );
};

/**
 * Validate phone number 
 * 
 * @param phone  
 */
var phoneIsValid = exports.phoneIsValid = function phoneIsValid(phone) {
    return (/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phone)
    );
};