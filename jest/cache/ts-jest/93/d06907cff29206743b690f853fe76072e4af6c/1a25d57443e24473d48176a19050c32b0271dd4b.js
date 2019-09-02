"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var fs_1 = tslib_1.__importDefault(require("fs"));
var TEPLATES_PATH = path_1.default.resolve(__dirname, '../templates/');
exports.cached = {};
exports.loadTpl = function (tplName) {
    if (exports.cached[tplName]) {
        return exports.cached[tplName] || '';
    }
    try {
        var presetTpl = fs_1.default.readFileSync(path_1.default.resolve(TEPLATES_PATH, tplName + ".tpl")).toString();
        exports.cached[tplName] = presetTpl;
        return presetTpl;
    }
    catch (_a) {
        throw new Error('file dont\'s exited');
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci9zcmMvdXRpbHMvbG9hZFRwbC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBdUI7QUFDdkIsa0RBQW1CO0FBSW5CLElBQU0sYUFBYSxHQUFHLGNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFBO0FBQ2pELFFBQUEsTUFBTSxHQUVmLEVBQUUsQ0FBQTtBQUVPLFFBQUEsT0FBTyxHQUFHLFVBQUMsT0FBeUI7SUFDL0MsSUFBSSxjQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxjQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFBO0tBQzdCO0lBQ0QsSUFBSTtRQUNGLElBQU0sU0FBUyxHQUFHLFlBQUUsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUssT0FBTyxTQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQzNGLGNBQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUE7UUFDM0IsT0FBTyxTQUFTLENBQUE7S0FDakI7SUFBQyxXQUFNO1FBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0tBQ3ZDO0FBQ0gsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9xaWRhbnRhL0RvY3VtZW50cy93ZWJwcm9qZWN0cy93ZWJwYWNrLWVsaW1pbmF0ZS1sb2FkZXIvc3JjL3V0aWxzL2xvYWRUcGwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBmcyBmcm9tICdmcydcblxuaW1wb3J0IHsgU3VwcG9ydFRlbXBsYXRlcyB9IGZyb20gJ0AvdHlwaW5ncydcblxuY29uc3QgVEVQTEFURVNfUEFUSCA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi90ZW1wbGF0ZXMvJylcbmV4cG9ydCBjb25zdCBjYWNoZWQ6IHtcbiAgW2tleSBpbiBTdXBwb3J0VGVtcGxhdGVzXT86IHN0cmluZ1xufSA9IHt9XG5cbmV4cG9ydCBjb25zdCBsb2FkVHBsID0gKHRwbE5hbWU6IFN1cHBvcnRUZW1wbGF0ZXMpOiBzdHJpbmcgPT4ge1xuICBpZiAoY2FjaGVkW3RwbE5hbWVdKSB7XG4gICAgcmV0dXJuIGNhY2hlZFt0cGxOYW1lXSB8fCAnJ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcHJlc2V0VHBsID0gZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShURVBMQVRFU19QQVRILCBgJHt0cGxOYW1lfS50cGxgKSkudG9TdHJpbmcoKVxuICAgIGNhY2hlZFt0cGxOYW1lXSA9IHByZXNldFRwbFxuICAgIHJldHVybiBwcmVzZXRUcGxcbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdmaWxlIGRvbnRcXCdzIGV4aXRlZCcpXG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==