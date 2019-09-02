"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = tslib_1.__importDefault(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
var loadTpl_1 = require("lib/src/utils/loadTpl");
describe('start load template', function () {
    test('load react-route tpl currently', function () {
        var reactRouteTpl = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../templates/react-route.tpl')).toString();
        expect(true).toBe(true);
        expect(typeof loadTpl_1.loadTpl('react-route')).toBe('string');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci90ZXN0L2xvYWRUcGwudGVzdC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBbUI7QUFDbkIsc0RBQXVCO0FBQ3ZCLGlEQUFnRDtBQUdoRCxRQUFRLENBQUMscUJBQXFCLEVBQUU7SUFDOUIsSUFBSSxDQUFDLGdDQUFnQyxFQUFFO1FBQ3JDLElBQU0sYUFBYSxHQUFHLFlBQUUsQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsOEJBQThCLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3pHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdkIsTUFBTSxDQUFDLE9BQU8saUJBQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN0RCxDQUFDLENBQUMsQ0FBQTtJQUVGLHFEQUFxRDtJQUNyRCw4R0FBOEc7SUFDOUcsMkJBQTJCO0lBQzNCLHNEQUFzRDtJQUN0RCxLQUFLO0lBRUwseURBQXlEO0lBQ3pELDJDQUEyQztJQUMzQyxLQUFLO0FBQ1AsQ0FBQyxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci90ZXN0L2xvYWRUcGwudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgbG9hZFRwbCB9IGZyb20gJ2xpYi9zcmMvdXRpbHMvbG9hZFRwbCc7XG5cblxuZGVzY3JpYmUoJ3N0YXJ0IGxvYWQgdGVtcGxhdGUnLCAoKSA9PiB7XG4gIHRlc3QoJ2xvYWQgcmVhY3Qtcm91dGUgdHBsIGN1cnJlbnRseScsICgpID0+IHtcbiAgICBjb25zdCByZWFjdFJvdXRlVHBsID0gZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi90ZW1wbGF0ZXMvcmVhY3Qtcm91dGUudHBsJykpLnRvU3RyaW5nKClcbiAgICBleHBlY3QodHJ1ZSkudG9CZSh0cnVlKVxuICAgIGV4cGVjdCh0eXBlb2YgbG9hZFRwbCgncmVhY3Qtcm91dGUnKSkudG9CZSgnc3RyaW5nJylcbiAgfSlcblxuICAvLyB0ZXN0KCdsb2FkIHJlYWN0LXJvdXRlIHRwbCB3aWxsYmUgY2FjaGVkJywgKCkgPT4ge1xuICAvLyAgIGNvbnN0IHJlYWN0Um91dGVUcGwgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3RlbXBsYXRlcy9yZWFjdC1yb3V0ZS50cGwnKSkudG9TdHJpbmcoKVxuICAvLyAgIGxvYWRUcGwoJ3JlYWN0LXJvdXRlJylcbiAgLy8gICBleHBlY3QoY2FjaGVkWydyZWFjdC1yb3V0ZSddKS50b0JlKHJlYWN0Um91dGVUcGwpXG4gIC8vIH0pXG5cbiAgLy8gdGVzdCgnbG9hZCB1bnN1cHBvcnQgdGVtcGxhdGUgd2lsbCB0aHJvdyBlcnInLCAoKSA9PiB7XG4gIC8vICAgZXhwZWN0KGxvYWRUcGwoJ3h4JyBhcyBhbnkpKS50b1Rocm93KClcbiAgLy8gfSlcbn0pIl0sInZlcnNpb24iOjN9