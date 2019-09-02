"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = tslib_1.__importDefault(require("fs"));
var loadTpl_1 = require("../src/utils/loadTpl");
describe('start load template', function () {
    test('load react-route tpl currently', function () {
        var reactRouteTpl = fs_1.default.readFileSync('../templates/react-route.tpl').toString();
        expect(loadTpl_1.loadTpl('react-route')).toBe(reactRouteTpl);
    });
    test('load react-route tpl willbe cached', function () {
        var reactRouteTpl = fs_1.default.readFileSync('../templates/react-route.tpl').toString();
        loadTpl_1.loadTpl('react-route');
        expect(loadTpl_1.cached['react-route']).toBe(reactRouteTpl);
    });
    test('load unsupport template will throw err', function () {
        expect(loadTpl_1.loadTpl('xx')).toThrow();
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci90ZXN0L2xvYWRUcGwudGVzdC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBbUI7QUFFbkIsZ0RBQXVEO0FBRXZELFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUM5QixJQUFJLENBQUMsZ0NBQWdDLEVBQUU7UUFDckMsSUFBTSxhQUFhLEdBQUcsWUFBRSxDQUFDLFlBQVksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2hGLE1BQU0sQ0FBQyxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ3BELENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLG9DQUFvQyxFQUFFO1FBQ3pDLElBQU0sYUFBYSxHQUFHLFlBQUUsQ0FBQyxZQUFZLENBQUMsOEJBQThCLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNoRixpQkFBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ3RCLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ25ELENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLHdDQUF3QyxFQUFFO1FBQzdDLE1BQU0sQ0FBQyxpQkFBTyxDQUFDLElBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDeEMsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvcWlkYW50YS9Eb2N1bWVudHMvd2VicHJvamVjdHMvd2VicGFjay1lbGltaW5hdGUtbG9hZGVyL3Rlc3QvbG9hZFRwbC50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcydcblxuaW1wb3J0IHsgbG9hZFRwbCwgY2FjaGVkIH0gZnJvbSAnLi4vc3JjL3V0aWxzL2xvYWRUcGwnO1xuXG5kZXNjcmliZSgnc3RhcnQgbG9hZCB0ZW1wbGF0ZScsICgpID0+IHtcbiAgdGVzdCgnbG9hZCByZWFjdC1yb3V0ZSB0cGwgY3VycmVudGx5JywgKCkgPT4ge1xuICAgIGNvbnN0IHJlYWN0Um91dGVUcGwgPSBmcy5yZWFkRmlsZVN5bmMoJy4uL3RlbXBsYXRlcy9yZWFjdC1yb3V0ZS50cGwnKS50b1N0cmluZygpXG4gICAgZXhwZWN0KGxvYWRUcGwoJ3JlYWN0LXJvdXRlJykpLnRvQmUocmVhY3RSb3V0ZVRwbClcbiAgfSlcblxuICB0ZXN0KCdsb2FkIHJlYWN0LXJvdXRlIHRwbCB3aWxsYmUgY2FjaGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHJlYWN0Um91dGVUcGwgPSBmcy5yZWFkRmlsZVN5bmMoJy4uL3RlbXBsYXRlcy9yZWFjdC1yb3V0ZS50cGwnKS50b1N0cmluZygpXG4gICAgbG9hZFRwbCgncmVhY3Qtcm91dGUnKVxuICAgIGV4cGVjdChjYWNoZWRbJ3JlYWN0LXJvdXRlJ10pLnRvQmUocmVhY3RSb3V0ZVRwbClcbiAgfSlcblxuICB0ZXN0KCdsb2FkIHVuc3VwcG9ydCB0ZW1wbGF0ZSB3aWxsIHRocm93IGVycicsICgpID0+IHtcbiAgICBleHBlY3QobG9hZFRwbCgneHgnIGFzIGFueSkpLnRvVGhyb3coKVxuICB9KVxufSkiXSwidmVyc2lvbiI6M30=