/**
 *  Convert object attribute to snake case
 * @param modelObject
 * @param mapFn
 */
export const snakeCaseObjectMap = (modelObject, mapFn) => {
    const object = Object.assign({}, modelObject);
    return Object.keys(object).reduce((result, key) => {
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
export const camelCaseObjectMap = (modelObject, mapFn) => {
    const object = Object.assign({}, modelObject);
    return Object.keys(object).reduce((result, key) => {
        let value = mapFn(object[key]);

        if(value && Array.isArray(value) && value.length){
            value = value.map((eachValue) => {
                return camelCaseObjectMap(eachValue, mapFn);
            });
        } else
        if(value && typeof value == 'object' && Object.keys(value).length){
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
export const emailIsValid = (email) => {
    return /\S+@\S+\.\S+/.test(email)
}


/**
 * Validate phone number 
 * 
 * @param phone  
 */
export const phoneIsValid = (phone) => {
    return /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phone)
}