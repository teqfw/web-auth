/**
 * Web server handler to process authentication requests.
 *
 * @namespace TeqFw_Web_Auth_Back_Mod_Server_Handler
 */
// MODULE'S IMPORT
import {constants as H2} from 'http2';

// MODULE'S VARS
const NS = 'TeqFw_Web_Auth_Back_Mod_Server_Handler';
const {
    HTTP2_HEADER_CONTENT_TYPE,
    HTTP2_METHOD_GET,
    HTTP2_METHOD_POST,
    HTTP_STATUS_OK,
} = H2;

// MODULE'S CLASSES
/**
 * @implements TeqFw_Web_Back_Api_Dispatcher_IHandler
 */
export default class TeqFw_Web_Auth_Back_Mod_Server_Handler {
    constructor(spec) {
        // DEPS
        /** @type {TeqFw_Web_Auth_Back_Defaults} */
        const DEF = spec['TeqFw_Web_Auth_Back_Defaults$'];
        /** @type {TeqFw_Core_Shared_Api_ILogger} */
        const logger = spec['TeqFw_Core_Shared_Api_ILogger$$']; // instance
        /** @type {TeqFw_Db_Back_RDb_IConnect} */
        const rdb = spec['TeqFw_Db_Back_RDb_IConnect$'];
        /** @type {TeqFw_Web_Auth_Shared_Dto_Connect_Register_Request} */
        const dtoReq = spec['TeqFw_Web_Auth_Shared_Dto_Connect_Register_Request$'];
        /** @type {TeqFw_Web_Auth_Shared_Dto_Connect_Register_Response} */
        const dtoRes = spec['TeqFw_Web_Auth_Shared_Dto_Connect_Register_Response$'];
        /** @type {TeqFw_Web_Auth_Back_Act_Front_Create.act|function} */
        const actCreate = spec['TeqFw_Web_Auth_Back_Act_Front_Create$'];
        /** @type {TeqFw_Web_Auth_Back_Mod_Server_Key} */
        const modKeys = spec['TeqFw_Web_Auth_Back_Mod_Server_Key$'];
        /** @type {TeqFw_Core_Back_Mod_App_Uuid} */
        const modBackUuid = spec['TeqFw_Core_Back_Mod_App_Uuid$'];

        // VARS


        // FUNCS
        /**
         * Process request if address space is equal to 'api'.
         * @param {module:http.IncomingMessage|module:http2.Http2ServerRequest} req
         * @param {module:http.ServerResponse|module:http2.Http2ServerResponse} res
         */
        async function process(req, res) {
            // FUNCS

            // MAIN
            /** @type {TeqFw_Core_Shared_Mod_Map} */
            const shares = res[DEF.MOD_WEB.HNDL_SHARE];
            if (!res.headersSent && !shares.get(DEF.MOD_WEB.SHARE_RES_STATUS)) {
                const dataOut = dtoRes.createDto();
                const json = shares.get(DEF.MOD_WEB.SHARE_REQ_BODY_JSON);
                const dataIn = dtoReq.createDto(json);
                const trx = await rdb.startTransaction();
                try {
                    const {id} = await actCreate({trx, keyPub: dataIn.publicKey, uuid: dataIn.uuid});
                    await trx.commit();
                    dataOut.frontBid = id;
                    dataOut.backKeyPublic = await modKeys.getPublic();
                    dataOut.backUuid = modBackUuid.get();
                    shares.set(DEF.MOD_WEB.SHARE_RES_BODY, JSON.stringify(dataOut));
                } catch (e) {
                    console.log(e);
                    await trx.rollback();
                    throw e;
                }
                // debugger
            }
        }

        // INSTANCE METHODS
        this.getProcessor = () => process;

        this.init = async function () {
            logger.info(`Initialize Web Auth requests handler.`);
        }

        this.canProcess = function ({method, address} = {}) {
            return (
                (method === HTTP2_METHOD_POST)
                && (address?.space === DEF.SHARED.SPACE_AUTH)
            );
        }

        // MAIN
        Object.defineProperty(process, 'namespace', {value: NS});
    }
}
