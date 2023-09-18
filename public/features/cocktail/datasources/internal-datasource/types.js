"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalCocktailDatasourceError = void 0;
const base_error_1 = __importDefault(require("../../../../utils/errors/base-error"));
class InternalCocktailDatasourceError extends base_error_1.default {
    constructor() {
        super(...arguments);
        this.type = 'internal-cocktail-datasource';
    }
}
exports.InternalCocktailDatasourceError = InternalCocktailDatasourceError;
