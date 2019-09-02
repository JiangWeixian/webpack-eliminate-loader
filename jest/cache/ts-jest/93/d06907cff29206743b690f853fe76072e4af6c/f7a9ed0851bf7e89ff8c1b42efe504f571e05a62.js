"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var loadTpl_1 = require("@/utils/loadTpl");
var match_1 = require("@/utils/match");
var tpl = '';
var defaultIncludes = [
    '**/layouts/**',
    '**/*/_layout?(.tsx|.jsx)',
    '**/index/**',
    '**/src/pages/*?(.tsx|.jsx|.ts|.js)',
    '**/src/*?(.tsx|.jsx|.ts|.js)',
    '**/NotFound?(.jsx|.tsx)',
    '**/src/pages/.umi/**',
    '**/src/!(pages)/**',
    '**/components/**',
    // tep add models
    '**/models/**',
];
exports.UmiRoute = {
    name: 'umi-route',
    onInit: function () {
        if (tpl) {
            return;
        }
        tpl = loadTpl_1.loadTpl('react-route');
    },
    onMatch: function (resourcePath, options) {
        return match_1.match(resourcePath, tslib_1.__assign({}, options, { include: (options.include || []).concat(defaultIncludes) }));
    },
    onReturn: function (source) {
        return tpl || source;
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci9zcmMvcHJlc2V0cy91bWktcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXlDO0FBRXpDLHVDQUFxQztBQUVyQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUE7QUFDWixJQUFNLGVBQWUsR0FBRztJQUN0QixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztDQUNmLENBQUE7QUFFWSxRQUFBLFFBQVEsR0FBVztJQUM5QixJQUFJLEVBQUUsV0FBVztJQUNqQixNQUFNO1FBQ0osSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFNO1NBQ1A7UUFDRCxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBQ0QsT0FBTyxFQUFFLFVBQUMsWUFBWSxFQUFFLE9BQU87UUFDN0IsT0FBTyxhQUFLLENBQUMsWUFBWSx1QkFDcEIsT0FBTyxJQUNWLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUN4RCxDQUFBO0lBQ0osQ0FBQztJQUNELFFBQVEsWUFBQyxNQUFNO1FBQ2IsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFBO0lBQ3RCLENBQUM7Q0FDRixDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9xaWRhbnRhL0RvY3VtZW50cy93ZWJwcm9qZWN0cy93ZWJwYWNrLWVsaW1pbmF0ZS1sb2FkZXIvc3JjL3ByZXNldHMvdW1pLXJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRUcGwgfSBmcm9tICdAL3V0aWxzL2xvYWRUcGwnXG5pbXBvcnQgeyBQcmVzZXQgfSBmcm9tICdAL3R5cGluZ3MnXG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gJ0AvdXRpbHMvbWF0Y2gnXG5cbmxldCB0cGwgPSAnJ1xuY29uc3QgZGVmYXVsdEluY2x1ZGVzID0gW1xuICAnKiovbGF5b3V0cy8qKicsXG4gICcqKi8qL19sYXlvdXQ/KC50c3h8LmpzeCknLFxuICAnKiovaW5kZXgvKionLFxuICAnKiovc3JjL3BhZ2VzLyo/KC50c3h8LmpzeHwudHN8LmpzKScsXG4gICcqKi9zcmMvKj8oLnRzeHwuanN4fC50c3wuanMpJyxcbiAgJyoqL05vdEZvdW5kPyguanN4fC50c3gpJyxcbiAgJyoqL3NyYy9wYWdlcy8udW1pLyoqJyxcbiAgJyoqL3NyYy8hKHBhZ2VzKS8qKicsIC8vIGluY2x1ZGUgZmlsZSBsaWtlIGBzcmMvaG9va3MvKiogfCBzcmMvY29tcG9uZW50cy8qKmBcbiAgJyoqL2NvbXBvbmVudHMvKionLFxuICAvLyB0ZXAgYWRkIG1vZGVsc1xuICAnKiovbW9kZWxzLyoqJyxcbl1cblxuZXhwb3J0IGNvbnN0IFVtaVJvdXRlOiBQcmVzZXQgPSB7XG4gIG5hbWU6ICd1bWktcm91dGUnLFxuICBvbkluaXQoKSB7XG4gICAgaWYgKHRwbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRwbCA9IGxvYWRUcGwoJ3JlYWN0LXJvdXRlJylcbiAgfSxcbiAgb25NYXRjaDogKHJlc291cmNlUGF0aCwgb3B0aW9ucykgPT4ge1xuICAgIHJldHVybiBtYXRjaChyZXNvdXJjZVBhdGgsIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBpbmNsdWRlOiAob3B0aW9ucy5pbmNsdWRlIHx8IFtdKS5jb25jYXQoZGVmYXVsdEluY2x1ZGVzKSxcbiAgICB9KVxuICB9LFxuICBvblJldHVybihzb3VyY2UpIHtcbiAgICByZXR1cm4gdHBsIHx8IHNvdXJjZVxuICB9LFxufVxuIl0sInZlcnNpb24iOjN9