"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var minimatch_1 = tslib_1.__importDefault(require("minimatch"));
var isMatched = function (resourcePath, pattern) {
    if (!resourcePath || !pattern) {
        return false;
    }
    try {
        return minimatch_1.default(resourcePath, pattern, { dot: true }) || !!resourcePath.match(pattern);
    }
    catch (_a) {
        return false;
    }
};
/**
 * match include will return source
 * @param resourcePath
 * @param include
 */
exports.hasIncluded = function (resourcePath, include) {
    if (include === void 0) { include = []; }
    if (!resourcePath || !include) {
        return true;
    }
    return include.some(function (v) {
        return isMatched(resourcePath, v);
    });
};
/**
 * match exclude will return tpl
 * @param resourcePath
 * @param exclude
 */
exports.hasExcluded = function (resourcePath, exclude) {
    if (exclude === void 0) { exclude = []; }
    if (!resourcePath || !exclude) {
        return false;
    }
    return exclude.some(function (v) {
        return isMatched(resourcePath, v);
    });
};
exports.match = function (resourcePath, options) {
    if (!options || !resourcePath) {
        return false;
    }
    if (options.include) {
        return !exports.hasIncluded(resourcePath, options.include);
    }
    if (options.exclude) {
        return exports.hasExcluded(resourcePath, options.exclude);
    }
    return false;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci9zcmMvdXRpbHMvbWF0Y2gudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0VBQWlDO0FBR2pDLElBQU0sU0FBUyxHQUFHLFVBQUMsWUFBcUIsRUFBRSxPQUFnQjtJQUN4RCxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQzdCLE9BQU8sS0FBSyxDQUFBO0tBQ2I7SUFDRCxJQUFJO1FBQ0YsT0FBTyxtQkFBUyxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUN4RjtJQUFDLFdBQU07UUFDTixPQUFPLEtBQUssQ0FBQTtLQUNiO0FBQ0gsQ0FBQyxDQUFBO0FBRUQ7Ozs7R0FJRztBQUNVLFFBQUEsV0FBVyxHQUFHLFVBQUMsWUFBcUIsRUFBRSxPQUFnQztJQUFoQyx3QkFBQSxFQUFBLFlBQWdDO0lBQ2pGLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDN0IsT0FBTyxJQUFJLENBQUE7S0FDWjtJQUNELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7UUFDbkIsT0FBTyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ25DLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBRUQ7Ozs7R0FJRztBQUNVLFFBQUEsV0FBVyxHQUFHLFVBQUMsWUFBcUIsRUFBRSxPQUFnQztJQUFoQyx3QkFBQSxFQUFBLFlBQWdDO0lBQ2pGLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDN0IsT0FBTyxLQUFLLENBQUE7S0FDYjtJQUNELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7UUFDbkIsT0FBTyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ25DLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBRVksUUFBQSxLQUFLLEdBQUcsVUFBQyxZQUFxQixFQUFFLE9BQWlCO0lBQzVELElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDN0IsT0FBTyxLQUFLLENBQUE7S0FDYjtJQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtRQUNuQixPQUFPLENBQUMsbUJBQVcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQ25EO0lBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1FBQ25CLE9BQU8sbUJBQVcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQ2xEO0lBQ0QsT0FBTyxLQUFLLENBQUE7QUFDZCxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci9zcmMvdXRpbHMvbWF0Y2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pbmltYXRjaCBmcm9tICdtaW5pbWF0Y2gnXG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnQC90eXBpbmdzJ1xuXG5jb25zdCBpc01hdGNoZWQgPSAocmVzb3VyY2VQYXRoPzogc3RyaW5nLCBwYXR0ZXJuPzogc3RyaW5nKSA9PiB7XG4gIGlmICghcmVzb3VyY2VQYXRoIHx8ICFwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gbWluaW1hdGNoKHJlc291cmNlUGF0aCwgcGF0dGVybiwgeyBkb3Q6IHRydWUgfSkgfHwgISFyZXNvdXJjZVBhdGgubWF0Y2gocGF0dGVybilcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBtYXRjaCBpbmNsdWRlIHdpbGwgcmV0dXJuIHNvdXJjZVxuICogQHBhcmFtIHJlc291cmNlUGF0aFxuICogQHBhcmFtIGluY2x1ZGVcbiAqL1xuZXhwb3J0IGNvbnN0IGhhc0luY2x1ZGVkID0gKHJlc291cmNlUGF0aD86IHN0cmluZywgaW5jbHVkZTogT3B0aW9uc1snaW5jbHVkZSddID0gW10pID0+IHtcbiAgaWYgKCFyZXNvdXJjZVBhdGggfHwgIWluY2x1ZGUpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBpbmNsdWRlLnNvbWUodiA9PiB7XG4gICAgcmV0dXJuIGlzTWF0Y2hlZChyZXNvdXJjZVBhdGgsIHYpXG4gIH0pXG59XG5cbi8qKlxuICogbWF0Y2ggZXhjbHVkZSB3aWxsIHJldHVybiB0cGxcbiAqIEBwYXJhbSByZXNvdXJjZVBhdGhcbiAqIEBwYXJhbSBleGNsdWRlXG4gKi9cbmV4cG9ydCBjb25zdCBoYXNFeGNsdWRlZCA9IChyZXNvdXJjZVBhdGg/OiBzdHJpbmcsIGV4Y2x1ZGU6IE9wdGlvbnNbJ2V4Y2x1ZGUnXSA9IFtdKSA9PiB7XG4gIGlmICghcmVzb3VyY2VQYXRoIHx8ICFleGNsdWRlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIGV4Y2x1ZGUuc29tZSh2ID0+IHtcbiAgICByZXR1cm4gaXNNYXRjaGVkKHJlc291cmNlUGF0aCwgdilcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IG1hdGNoID0gKHJlc291cmNlUGF0aD86IHN0cmluZywgb3B0aW9ucz86IE9wdGlvbnMpID0+IHtcbiAgaWYgKCFvcHRpb25zIHx8ICFyZXNvdXJjZVBhdGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpZiAob3B0aW9ucy5pbmNsdWRlKSB7XG4gICAgcmV0dXJuICFoYXNJbmNsdWRlZChyZXNvdXJjZVBhdGgsIG9wdGlvbnMuaW5jbHVkZSlcbiAgfVxuICBpZiAob3B0aW9ucy5leGNsdWRlKSB7XG4gICAgcmV0dXJuIGhhc0V4Y2x1ZGVkKHJlc291cmNlUGF0aCwgb3B0aW9ucy5leGNsdWRlKVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuIl0sInZlcnNpb24iOjN9