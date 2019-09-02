"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("../src/presets/factory");
var presets_1 = require("../src/presets");
describe('start test presets.factory', function () {
    test('the result of factory.create should have all preset method', function () {
        var preset = factory_1.presetFactory.create({ name: 'preset' });
        expect(!!preset.name).toBe(true);
        expect(!!preset.onInit).toBe(true);
        expect(!!preset.onMatch).toBe(true);
        expect(!!preset.onReturn).toBe(true);
    });
    test('the method of preset should overwrite origin method', function () {
        var ReactRoutePreset = factory_1.presetFactory.create(presets_1.ReactRoute);
        expect(ReactRoutePreset.onMatch('src/pages/home.jsx', {
            presets: [
                'react-route'
            ],
            exclude: [
                'src/pages/home.jsx'
            ]
        })).toBe(true);
        var UmiRematchPreset = factory_1.presetFactory.create(presets_1.UmiRematch);
        expect(UmiRematchPreset.name).toBe('umi-rematch');
        expect(UmiRematchPreset.onMatch('src/pages/home.jsx', {
            presets: [
                'umi-rematch'
            ],
            exclude: [
                'src/pages/home.jsx'
            ]
        })).toBe(false);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci90ZXN0L2ZhY3RvcnkudGVzdC50cyIsIm1hcHBpbmdzIjoiOztBQUFBLGtEQUFzRDtBQUN0RCwwQ0FBdUQ7QUFFdkQsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBQ3JDLElBQUksQ0FBQyw0REFBNEQsRUFBRTtRQUNqRSxJQUFNLE1BQU0sR0FBRyx1QkFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQVMsQ0FBQyxDQUFBO1FBQzlELE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNoQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN0QyxDQUFDLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyxxREFBcUQsRUFBRTtRQUMxRCxJQUFNLGdCQUFnQixHQUFHLHVCQUFhLENBQUMsTUFBTSxDQUFDLG9CQUFVLENBQUMsQ0FBQTtRQUN6RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFO1lBQ3BELE9BQU8sRUFBRTtnQkFDUCxhQUFhO2FBQ2Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ1Asb0JBQW9CO2FBQ3JCO1NBQ0YsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2QsSUFBTSxnQkFBZ0IsR0FBRyx1QkFBYSxDQUFDLE1BQU0sQ0FBQyxvQkFBVSxDQUFDLENBQUE7UUFDekQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNqRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFO1lBQ3BELE9BQU8sRUFBRTtnQkFDUCxhQUFhO2FBQ2Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ1Asb0JBQW9CO2FBQ3JCO1NBQ0YsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2pCLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci90ZXN0L2ZhY3RvcnkudGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmVzZXRGYWN0b3J5IH0gZnJvbSAnLi4vc3JjL3ByZXNldHMvZmFjdG9yeSdcbmltcG9ydCB7IFVtaVJlbWF0Y2gsIFJlYWN0Um91dGUgfSBmcm9tICcuLi9zcmMvcHJlc2V0cydcblxuZGVzY3JpYmUoJ3N0YXJ0IHRlc3QgcHJlc2V0cy5mYWN0b3J5JywgKCkgPT4ge1xuICB0ZXN0KCd0aGUgcmVzdWx0IG9mIGZhY3RvcnkuY3JlYXRlIHNob3VsZCBoYXZlIGFsbCBwcmVzZXQgbWV0aG9kJywgKCkgPT4ge1xuICAgIGNvbnN0IHByZXNldCA9IHByZXNldEZhY3RvcnkuY3JlYXRlKHsgbmFtZTogJ3ByZXNldCcgfSBhcyBhbnkpXG4gICAgZXhwZWN0KCEhcHJlc2V0Lm5hbWUpLnRvQmUodHJ1ZSlcbiAgICBleHBlY3QoISFwcmVzZXQub25Jbml0KS50b0JlKHRydWUpXG4gICAgZXhwZWN0KCEhcHJlc2V0Lm9uTWF0Y2gpLnRvQmUodHJ1ZSlcbiAgICBleHBlY3QoISFwcmVzZXQub25SZXR1cm4pLnRvQmUodHJ1ZSlcbiAgfSlcblxuICB0ZXN0KCd0aGUgbWV0aG9kIG9mIHByZXNldCBzaG91bGQgb3ZlcndyaXRlIG9yaWdpbiBtZXRob2QnLCAoKSA9PiB7XG4gICAgY29uc3QgUmVhY3RSb3V0ZVByZXNldCA9IHByZXNldEZhY3RvcnkuY3JlYXRlKFJlYWN0Um91dGUpXG4gICAgZXhwZWN0KFJlYWN0Um91dGVQcmVzZXQub25NYXRjaCgnc3JjL3BhZ2VzL2hvbWUuanN4Jywge1xuICAgICAgcHJlc2V0czogW1xuICAgICAgICAncmVhY3Qtcm91dGUnXG4gICAgICBdLFxuICAgICAgZXhjbHVkZTogW1xuICAgICAgICAnc3JjL3BhZ2VzL2hvbWUuanN4J1xuICAgICAgXVxuICAgIH0pKS50b0JlKHRydWUpXG4gICAgY29uc3QgVW1pUmVtYXRjaFByZXNldCA9IHByZXNldEZhY3RvcnkuY3JlYXRlKFVtaVJlbWF0Y2gpXG4gICAgZXhwZWN0KFVtaVJlbWF0Y2hQcmVzZXQubmFtZSkudG9CZSgndW1pLXJlbWF0Y2gnKVxuICAgIGV4cGVjdChVbWlSZW1hdGNoUHJlc2V0Lm9uTWF0Y2goJ3NyYy9wYWdlcy9ob21lLmpzeCcsIHtcbiAgICAgIHByZXNldHM6IFtcbiAgICAgICAgJ3VtaS1yZW1hdGNoJ1xuICAgICAgXSxcbiAgICAgIGV4Y2x1ZGU6IFtcbiAgICAgICAgJ3NyYy9wYWdlcy9ob21lLmpzeCdcbiAgICAgIF1cbiAgICB9KSkudG9CZShmYWxzZSlcbiAgfSlcbn0pXG4iXSwidmVyc2lvbiI6M30=