/**
 * DTO to represent plugin descriptor (teqfw.json) structure
 * that is related to '@teqfw/web-auth' node:
 */
// MODULE'S VARS
const NS = 'TeqFw_Web_Auth_Back_Dto_Plugin_Desc';

// MODULE'S CLASSES
/**
 * @memberOf TeqFw_Web_Auth_Back_Dto_Plugin_Desc
 */
class Dto {
    static namespace = NS;
    /** @type {string} */
    attr;
}

/**
 * @implements TeqFw_Core_Shared_Api_Factory_Dto
 */
export default class TeqFw_Web_Auth_Back_Dto_Plugin_Desc {
    constructor(spec) {
        // DEPS
        /** @type {TeqFw_Core_Shared_Util_Cast.castString|function} */
        const castString = spec['TeqFw_Core_Shared_Util_Cast.castString'];

        // INSTANCE METHODS
        /**
         * @param {TeqFw_Web_Auth_Back_Dto_Plugin_Desc.Dto} [data]
         * @return {TeqFw_Web_Auth_Back_Dto_Plugin_Desc.Dto}
         */
        this.createDto = function (data) {
            const res = new Dto();
            res.attr = castString(data?.attr);
            return res;
        }
    }
}
