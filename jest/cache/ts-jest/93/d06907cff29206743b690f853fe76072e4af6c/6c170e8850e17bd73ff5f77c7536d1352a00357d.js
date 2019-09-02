"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = tslib_1.__importDefault(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
var webpack_eliminate_loader_cjs_js_1 = require("lib/webpack-eliminate-loader.cjs.js");
describe('start load template', function () {
    test('load react-route tpl currently', function () {
        var reactRouteTpl = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../templates/react-route.tpl')).toString();
        expect(true).toBe(true);
        expect(typeof webpack_eliminate_loader_cjs_js_1.utils.loadTpl('react-route')).toBe('string');
    });
    // test('load react-route tpl willbe cached', () => {
    //   const reactRouteTpl = fs.readFileSync(path.resolve(__dirname, '../templates/react-route.tpl')).toString()
    //   loadTpl('react-route')
    //   expect(cached['react-route']).toBe(reactRouteTpl)
    // })
    // test('load unsupport template will throw err', () => {
    //   expect(loadTpl('xx' as any)).toThrow()
    // })
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci90ZXN0L2xvYWRUcGwudGVzdC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBbUI7QUFDbkIsc0RBQXVCO0FBQ3ZCLHVGQUE0RDtBQUc1RCxRQUFRLENBQUMscUJBQXFCLEVBQUU7SUFDOUIsSUFBSSxDQUFDLGdDQUFnQyxFQUFFO1FBQ3JDLElBQU0sYUFBYSxHQUFHLFlBQUUsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsOEJBQThCLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3pHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdkIsTUFBTSxDQUFDLE9BQU8sdUNBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDNUQsQ0FBQyxDQUFDLENBQUE7SUFFRixxREFBcUQ7SUFDckQsOEdBQThHO0lBQzlHLDJCQUEyQjtJQUMzQixzREFBc0Q7SUFDdEQsS0FBSztJQUVMLHlEQUF5RDtJQUN6RCwyQ0FBMkM7SUFDM0MsS0FBSztBQUNQLENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9xaWRhbnRhL0RvY3VtZW50cy93ZWJwcm9qZWN0cy93ZWJwYWNrLWVsaW1pbmF0ZS1sb2FkZXIvdGVzdC9sb2FkVHBsLnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSAnbGliL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci5janMuanMnO1xuXG5cbmRlc2NyaWJlKCdzdGFydCBsb2FkIHRlbXBsYXRlJywgKCkgPT4ge1xuICB0ZXN0KCdsb2FkIHJlYWN0LXJvdXRlIHRwbCBjdXJyZW50bHknLCAoKSA9PiB7XG4gICAgY29uc3QgcmVhY3RSb3V0ZVRwbCA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vdGVtcGxhdGVzL3JlYWN0LXJvdXRlLnRwbCcpKS50b1N0cmluZygpXG4gICAgZXhwZWN0KHRydWUpLnRvQmUodHJ1ZSlcbiAgICBleHBlY3QodHlwZW9mIHV0aWxzLmxvYWRUcGwoJ3JlYWN0LXJvdXRlJykpLnRvQmUoJ3N0cmluZycpXG4gIH0pXG5cbiAgLy8gdGVzdCgnbG9hZCByZWFjdC1yb3V0ZSB0cGwgd2lsbGJlIGNhY2hlZCcsICgpID0+IHtcbiAgLy8gICBjb25zdCByZWFjdFJvdXRlVHBsID0gZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi90ZW1wbGF0ZXMvcmVhY3Qtcm91dGUudHBsJykpLnRvU3RyaW5nKClcbiAgLy8gICBsb2FkVHBsKCdyZWFjdC1yb3V0ZScpXG4gIC8vICAgZXhwZWN0KGNhY2hlZFsncmVhY3Qtcm91dGUnXSkudG9CZShyZWFjdFJvdXRlVHBsKVxuICAvLyB9KVxuXG4gIC8vIHRlc3QoJ2xvYWQgdW5zdXBwb3J0IHRlbXBsYXRlIHdpbGwgdGhyb3cgZXJyJywgKCkgPT4ge1xuICAvLyAgIGV4cGVjdChsb2FkVHBsKCd4eCcgYXMgYW55KSkudG9UaHJvdygpXG4gIC8vIH0pXG59KSJdLCJ2ZXJzaW9uIjozfQ==