"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Behance = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * Handles request orchestration to the Behance API.
 */
class Behance {
    /**
     * @param clientId the client id to access the Behance API.
     * @param timeout the time in ms to wait before aborting a request. Default is 1000ms.
     */
    constructor(config) {
        this.clientId = config.clientId;
        this.api = axios_1.default.create({
            baseURL: 'https://api.behance.net/v2',
            timeout: config.timeout
        });
    }
    getFields() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.get('/fields', { params: { clientId: this.clientId } });
        });
    }
}
exports.Behance = Behance;
//# sourceMappingURL=behance.js.map