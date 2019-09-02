"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = tslib_1.__importDefault(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
var webpack_eliminate_loader_cjs_js_1 = require("../lib/webpack-eliminate-loader.cjs.js");
describe('start load template', function () {
    test('load react-route tpl currently', function () {
        var reactRouteTpl = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../templates/react-route.tpl')).toString();
        expect(webpack_eliminate_loader_cjs_js_1.utils.loadTpl('react-route')).toBe(reactRouteTpl);
    });
    test('load unsupport template will throw err', function () {
        expect(function () {
            webpack_eliminate_loader_cjs_js_1.utils.loadTpl('xx');
        }).toThrow();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci90ZXN0L2xvYWRUcGwudGVzdC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBbUI7QUFDbkIsc0RBQXVCO0FBQ3ZCLDBGQUErRDtBQUcvRCxRQUFRLENBQUMscUJBQXFCLEVBQUU7SUFDOUIsSUFBSSxDQUFDLGdDQUFnQyxFQUFFO1FBQ3JDLElBQU0sYUFBYSxHQUFHLFlBQUUsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsOEJBQThCLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3pHLE1BQU0sQ0FBQyx1Q0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUMxRCxDQUFDLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyx3Q0FBd0MsRUFBRTtRQUM3QyxNQUFNLENBQUM7WUFDTCx1Q0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFXLENBQUMsQ0FBQTtRQUM1QixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNkLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci90ZXN0L2xvYWRUcGwudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgdXRpbHMgfSBmcm9tICcuLi9saWIvd2VicGFjay1lbGltaW5hdGUtbG9hZGVyLmNqcy5qcyc7XG5cblxuZGVzY3JpYmUoJ3N0YXJ0IGxvYWQgdGVtcGxhdGUnLCAoKSA9PiB7XG4gIHRlc3QoJ2xvYWQgcmVhY3Qtcm91dGUgdHBsIGN1cnJlbnRseScsICgpID0+IHtcbiAgICBjb25zdCByZWFjdFJvdXRlVHBsID0gZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi90ZW1wbGF0ZXMvcmVhY3Qtcm91dGUudHBsJykpLnRvU3RyaW5nKClcbiAgICBleHBlY3QodXRpbHMubG9hZFRwbCgncmVhY3Qtcm91dGUnKSkudG9CZShyZWFjdFJvdXRlVHBsKVxuICB9KVxuXG4gIHRlc3QoJ2xvYWQgdW5zdXBwb3J0IHRlbXBsYXRlIHdpbGwgdGhyb3cgZXJyJywgKCkgPT4ge1xuICAgIGV4cGVjdCgoKSA9PiB7XG4gICAgICB1dGlscy5sb2FkVHBsKCd4eCcgYXMgYW55KVxuICAgIH0pLnRvVGhyb3coKVxuICB9KVxufSkiXSwidmVyc2lvbiI6M30=