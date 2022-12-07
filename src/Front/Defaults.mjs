/**
 * Plugin constants (hardcoded configuration) for frontend code.
 */
export default class TeqFw_Web_Auth_Front_Defaults {

    /** @type {TeqFw_Web_Auth_Shared_Defaults} */
    SHARED;

    STORE_SESS_KEY_TAB_UUID = `teqfw-web-auth-tab-uuid`;

    constructor(spec) {
        // EXTRACT DEPS
        this.SHARED = spec['TeqFw_Web_Auth_Shared_Defaults$'];

        // MAIN FUNCTIONALITY
        Object.freeze(this);
    }
}
