"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var minimatch_1 = tslib_1.__importDefault(require("minimatch"));
var loadTpl_1 = require("@/utils/loadTpl");
var match_1 = require("@/utils/match");
var tpl = '';
var defaultIncludes = ['**/src/*?(.tsx|.jsx|.ts|.js)'];
var isRematchModel = function (resourcePath) {
    return minimatch_1.default(resourcePath, '**/models/**');
};
exports.UmiRematch = {
    name: 'umi-rematch',
    onInit: function () {
        if (tpl) {
            return;
        }
        tpl = loadTpl_1.loadTpl('rematch');
    },
    onMatch: function (resourcePath, options) {
        if (!isRematchModel(resourcePath)) {
            return false;
        }
        return match_1.match(resourcePath, tslib_1.__assign({}, options, { include: (options.include || []).concat(defaultIncludes) }));
    },
    onReturn: function (source) {
        return tpl || source;
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci9zcmMvcHJlc2V0cy91bWktcmVtYXRjaC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxnRUFBaUM7QUFFakMsMkNBQXlDO0FBRXpDLHVDQUFxQztBQUVyQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUE7QUFDWixJQUFNLGVBQWUsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUE7QUFFeEQsSUFBTSxjQUFjLEdBQUcsVUFBQyxZQUFvQjtJQUMxQyxPQUFPLG1CQUFTLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFBO0FBQ2hELENBQUMsQ0FBQTtBQUVZLFFBQUEsVUFBVSxHQUFXO0lBQ2hDLElBQUksRUFBRSxhQUFhO0lBQ25CLE1BQU07UUFDSixJQUFJLEdBQUcsRUFBRTtZQUNQLE9BQU07U0FDUDtRQUNELEdBQUcsR0FBRyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFDRCxPQUFPLEVBQUUsVUFBQyxZQUFZLEVBQUUsT0FBTztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sS0FBSyxDQUFBO1NBQ2I7UUFDRCxPQUFPLGFBQUssQ0FBQyxZQUFZLHVCQUNwQixPQUFPLElBQ1YsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQ3hELENBQUE7SUFDSixDQUFDO0lBQ0QsUUFBUSxZQUFDLE1BQU07UUFDYixPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUE7SUFDdEIsQ0FBQztDQUNGLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci9zcmMvcHJlc2V0cy91bWktcmVtYXRjaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWluaW1hdGNoIGZyb20gJ21pbmltYXRjaCdcblxuaW1wb3J0IHsgbG9hZFRwbCB9IGZyb20gJ0AvdXRpbHMvbG9hZFRwbCdcbmltcG9ydCB7IFByZXNldCB9IGZyb20gJ0AvdHlwaW5ncydcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSAnQC91dGlscy9tYXRjaCdcblxubGV0IHRwbCA9ICcnXG5jb25zdCBkZWZhdWx0SW5jbHVkZXMgPSBbJyoqL3NyYy8qPygudHN4fC5qc3h8LnRzfC5qcyknXVxuXG5jb25zdCBpc1JlbWF0Y2hNb2RlbCA9IChyZXNvdXJjZVBhdGg6IHN0cmluZykgPT4ge1xuICByZXR1cm4gbWluaW1hdGNoKHJlc291cmNlUGF0aCwgJyoqL21vZGVscy8qKicpXG59XG5cbmV4cG9ydCBjb25zdCBVbWlSZW1hdGNoOiBQcmVzZXQgPSB7XG4gIG5hbWU6ICd1bWktcmVtYXRjaCcsXG4gIG9uSW5pdCgpIHtcbiAgICBpZiAodHBsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdHBsID0gbG9hZFRwbCgncmVtYXRjaCcpXG4gIH0sXG4gIG9uTWF0Y2g6IChyZXNvdXJjZVBhdGgsIG9wdGlvbnMpID0+IHtcbiAgICBpZiAoIWlzUmVtYXRjaE1vZGVsKHJlc291cmNlUGF0aCkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gbWF0Y2gocmVzb3VyY2VQYXRoLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgaW5jbHVkZTogKG9wdGlvbnMuaW5jbHVkZSB8fCBbXSkuY29uY2F0KGRlZmF1bHRJbmNsdWRlcyksXG4gICAgfSlcbiAgfSxcbiAgb25SZXR1cm4oc291cmNlKSB7XG4gICAgcmV0dXJuIHRwbCB8fCBzb3VyY2VcbiAgfSxcbn1cbiJdLCJ2ZXJzaW9uIjozfQ==