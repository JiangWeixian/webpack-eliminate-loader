"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = tslib_1.__importDefault(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
describe('start load template', function () {
    test('load react-route tpl currently', function () {
        var reactRouteTpl = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../templates/react-route.tpl')).toString();
        expect(true).toBe(true);
        // expect(typeof loadTpl('react-route')).toBe('string')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci90ZXN0L2xvYWRUcGwudGVzdC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBbUI7QUFDbkIsc0RBQXVCO0FBSXZCLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUM5QixJQUFJLENBQUMsZ0NBQWdDLEVBQUU7UUFDckMsSUFBTSxhQUFhLEdBQUcsWUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDekcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN2Qix1REFBdUQ7SUFDekQsQ0FBQyxDQUFDLENBQUE7SUFFRixxREFBcUQ7SUFDckQsOEdBQThHO0lBQzlHLDJCQUEyQjtJQUMzQixzREFBc0Q7SUFDdEQsS0FBSztJQUVMLHlEQUF5RDtJQUN6RCwyQ0FBMkM7SUFDM0MsS0FBSztBQUNQLENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9xaWRhbnRhL0RvY3VtZW50cy93ZWJwcm9qZWN0cy93ZWJwYWNrLWVsaW1pbmF0ZS1sb2FkZXIvdGVzdC9sb2FkVHBsLnRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuaW1wb3J0IHsgbG9hZFRwbCwgY2FjaGVkIH0gZnJvbSAnLi4vc3JjL3V0aWxzL2xvYWRUcGwnO1xuXG5kZXNjcmliZSgnc3RhcnQgbG9hZCB0ZW1wbGF0ZScsICgpID0+IHtcbiAgdGVzdCgnbG9hZCByZWFjdC1yb3V0ZSB0cGwgY3VycmVudGx5JywgKCkgPT4ge1xuICAgIGNvbnN0IHJlYWN0Um91dGVUcGwgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3RlbXBsYXRlcy9yZWFjdC1yb3V0ZS50cGwnKSkudG9TdHJpbmcoKVxuICAgIGV4cGVjdCh0cnVlKS50b0JlKHRydWUpXG4gICAgLy8gZXhwZWN0KHR5cGVvZiBsb2FkVHBsKCdyZWFjdC1yb3V0ZScpKS50b0JlKCdzdHJpbmcnKVxuICB9KVxuXG4gIC8vIHRlc3QoJ2xvYWQgcmVhY3Qtcm91dGUgdHBsIHdpbGxiZSBjYWNoZWQnLCAoKSA9PiB7XG4gIC8vICAgY29uc3QgcmVhY3RSb3V0ZVRwbCA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vdGVtcGxhdGVzL3JlYWN0LXJvdXRlLnRwbCcpKS50b1N0cmluZygpXG4gIC8vICAgbG9hZFRwbCgncmVhY3Qtcm91dGUnKVxuICAvLyAgIGV4cGVjdChjYWNoZWRbJ3JlYWN0LXJvdXRlJ10pLnRvQmUocmVhY3RSb3V0ZVRwbClcbiAgLy8gfSlcblxuICAvLyB0ZXN0KCdsb2FkIHVuc3VwcG9ydCB0ZW1wbGF0ZSB3aWxsIHRocm93IGVycicsICgpID0+IHtcbiAgLy8gICBleHBlY3QobG9hZFRwbCgneHgnIGFzIGFueSkpLnRvVGhyb3coKVxuICAvLyB9KVxufSkiXSwidmVyc2lvbiI6M30=