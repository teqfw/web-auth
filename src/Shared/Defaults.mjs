/**
 * Plugin constants (hardcoded configuration) for shared code.
 */
export default class TeqFw_Web_Auth_Shared_Defaults {

    NAME = '@teqfw/web-auth'; // plugin's node in 'teqfw.json' & './cfg/local.json'

    SPACE_AUTH = 'auth'; // space for web requests

    constructor() {
        Object.freeze(this);
    }
}
