/**
 * Plugin constants (hardcoded configuration) for backend code.
 */
export default class TeqFw_Web_Auth_Back_Defaults {

    CLI_PREFIX = 'web-auth'; // prefix in CLI commands

    FILE_CRYPTO_KEYS = './cfg/local.crypto.keys.json';

    /** @type {TeqFw_Web_Back_Defaults} */
    MOD_WEB;

    /** @type {TeqFw_Web_Auth_Shared_Defaults} */
    SHARED;

    constructor(spec) {
        // EXTRACT DEPS
        this.MOD_WEB = spec['TeqFw_Web_Back_Defaults$'];
        this.SHARED = spec['TeqFw_Web_Auth_Shared_Defaults$'];

        // MAIN FUNCTIONALITY
        Object.freeze(this);
    }
}
