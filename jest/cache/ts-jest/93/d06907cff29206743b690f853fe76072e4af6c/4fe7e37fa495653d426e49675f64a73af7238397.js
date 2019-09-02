"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = tslib_1.__importDefault(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
var loadTpl_1 = require("../src/utils/loadTpl");
describe('start load template', function () {
    test('load react-route tpl currently', function () {
        var reactRouteTpl = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../templates/react-route.tpl')).toString();
        expect(loadTpl_1.loadTpl('react-route')).toBe(reactRouteTpl);
    });
    test('load react-route tpl willbe cached', function () {
        var reactRouteTpl = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../templates/react-route.tpl')).toString();
        loadTpl_1.loadTpl('react-route');
        expect(loadTpl_1.cached['react-route']).toBe(reactRouteTpl);
    });
    test('load unsupport template will throw err', function () {
        expect(loadTpl_1.loadTpl('xx')).toThrow();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci90ZXN0L2xvYWRUcGwudGVzdC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBbUI7QUFDbkIsc0RBQXVCO0FBRXZCLGdEQUF1RDtBQUV2RCxRQUFRLENBQUMscUJBQXFCLEVBQUU7SUFDOUIsSUFBSSxDQUFDLGdDQUFnQyxFQUFFO1FBQ3JDLElBQU0sYUFBYSxHQUFHLFlBQUUsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsOEJBQThCLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3pHLE1BQU0sQ0FBQyxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ3BELENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLG9DQUFvQyxFQUFFO1FBQ3pDLElBQU0sYUFBYSxHQUFHLFlBQUUsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsOEJBQThCLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3pHLGlCQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDdEIsTUFBTSxDQUFDLGdCQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDbkQsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsd0NBQXdDLEVBQUU7UUFDN0MsTUFBTSxDQUFDLGlCQUFPLENBQUMsSUFBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUN4QyxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9xaWRhbnRhL0RvY3VtZW50cy93ZWJwcm9qZWN0cy93ZWJwYWNrLWVsaW1pbmF0ZS1sb2FkZXIvdGVzdC9sb2FkVHBsLnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuaW1wb3J0IHsgbG9hZFRwbCwgY2FjaGVkIH0gZnJvbSAnLi4vc3JjL3V0aWxzL2xvYWRUcGwnO1xuXG5kZXNjcmliZSgnc3RhcnQgbG9hZCB0ZW1wbGF0ZScsICgpID0+IHtcbiAgdGVzdCgnbG9hZCByZWFjdC1yb3V0ZSB0cGwgY3VycmVudGx5JywgKCkgPT4ge1xuICAgIGNvbnN0IHJlYWN0Um91dGVUcGwgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3RlbXBsYXRlcy9yZWFjdC1yb3V0ZS50cGwnKSkudG9TdHJpbmcoKVxuICAgIGV4cGVjdChsb2FkVHBsKCdyZWFjdC1yb3V0ZScpKS50b0JlKHJlYWN0Um91dGVUcGwpXG4gIH0pXG5cbiAgdGVzdCgnbG9hZCByZWFjdC1yb3V0ZSB0cGwgd2lsbGJlIGNhY2hlZCcsICgpID0+IHtcbiAgICBjb25zdCByZWFjdFJvdXRlVHBsID0gZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi90ZW1wbGF0ZXMvcmVhY3Qtcm91dGUudHBsJykpLnRvU3RyaW5nKClcbiAgICBsb2FkVHBsKCdyZWFjdC1yb3V0ZScpXG4gICAgZXhwZWN0KGNhY2hlZFsncmVhY3Qtcm91dGUnXSkudG9CZShyZWFjdFJvdXRlVHBsKVxuICB9KVxuXG4gIHRlc3QoJ2xvYWQgdW5zdXBwb3J0IHRlbXBsYXRlIHdpbGwgdGhyb3cgZXJyJywgKCkgPT4ge1xuICAgIGV4cGVjdChsb2FkVHBsKCd4eCcgYXMgYW55KSkudG9UaHJvdygpXG4gIH0pXG59KSJdLCJ2ZXJzaW9uIjozfQ==