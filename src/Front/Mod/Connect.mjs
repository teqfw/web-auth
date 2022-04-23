/**
 * Common gateway to Web Auth services.
 *
 * @namespace TeqFw_Web_Auth_Front_Mod_Connect
 */
// MODULE'S CLASSES
export default class TeqFw_Web_Auth_Front_Mod_Connect {
    constructor(spec) {
        // DEPS
        /** @type {TeqFw_Web_Auth_Front_Defaults} */
        const DEF = spec['TeqFw_Web_Auth_Front_Defaults$'];
        /** @type {TeqFw_Web_Front_Api_Gate_IErrorHandler} */
        const errHndl = spec['TeqFw_Web_Front_Api_Gate_IErrorHandler$'];
        /** @type {TeqFw_Web_Front_Api_Mod_Server_Connect_IState} */
        const modConn = spec['TeqFw_Web_Front_Api_Mod_Server_Connect_IState$'];
        /** @type {TeqFw_Web_Front_Mod_Config} */
        const modCfg = spec['TeqFw_Web_Front_Mod_Config$'];

        // VARS
        let BASE;

        // FUNCS
        function getBaseUrl() {
            if (!BASE) {
                const cfg = modCfg.get();
                const schema = '//';
                const domain = cfg.urlBase ?? location.hostname;
                let port = location.port; // empty string for default ports (80 & 443)
                if (port !== '') port = `:${port}`
                const root = (cfg.root) ? `/${cfg.root}` : '';
                const door = (cfg.door) ? `/${cfg.door}` : '';
                const space = `/${DEF.SHARED.SPACE_AUTH}`;
                BASE = `${schema}${domain}${port}${root}${door}${space}`;
            }
            return BASE;
        }

        // INSTANCE METHODS

        /**
         * Register front identity (UUID & public key) on the back.
         *
         * @param {string} uuid
         * @param {string} publicKey
         * @return {Promise<{frontId: number, backKeyPublic: string, backUuid: string}>}
         */
        this.register = async function (uuid, publicKey) {
            let frontId = 4;
            let backUuid = 'uuid';
            let backKeyPublic = 'key';

            return {frontId, backUuid, backKeyPublic};
        }
    }
}
