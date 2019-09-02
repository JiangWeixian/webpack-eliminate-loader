"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_1 = require("../src/utils/match");
describe('start test utils.match', function () {
    test('hasInclude should return true when first arg is undefined', function () {
        expect(match_1.hasIncluded(undefined, [])).toBe(true);
    });
    test('hasInclude should return true when match', function () {
        expect(match_1.hasIncluded('src/pages', ['src/pages'])).toBe(true);
    });
    test('hasExclude should return false when first arg is undefined', function () {
        expect(match_1.hasExcluded(undefined, [])).toBe(false);
    });
    test('hasInclude should return true when match', function () {
        expect(match_1.hasExcluded('src/pages', ['src/pages'])).toBe(true);
    });
    test('hasInclude and hasExclude should support glob regex', function () {
        expect(match_1.hasIncluded('src/pages/home.jsx', ['**/pages/**'])).toBe(true);
        expect(match_1.hasExcluded('src/pages/home.jsx', ['**/pages/**'])).toBe(true);
    });
    test('match should return false when options is undefined', function () {
        expect(match_1.match('src/pages/home.jsx')).toBe(false);
    });
    test('match should return false when include matched', function () {
        match_1.match('src/pages/home.jsx', {
            presets: ['react-route'],
            include: ['**/pages/**'],
        });
    });
    test('match should return true when exclude matched', function () {
        match_1.match('src/pages/home.jsx', {
            presets: ['react-route'],
            exclude: ['**/pages/**'],
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci90ZXN0L21hdGNoLnRlc3QudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBb0U7QUFFcEUsUUFBUSxDQUFDLHdCQUF3QixFQUFFO0lBQ2pDLElBQUksQ0FBQywyREFBMkQsRUFBRTtRQUNoRSxNQUFNLENBQUMsbUJBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDL0MsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsMENBQTBDLEVBQUU7UUFDL0MsTUFBTSxDQUFDLG1CQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM1RCxDQUFDLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyw0REFBNEQsRUFBRTtRQUNqRSxNQUFNLENBQUMsbUJBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEQsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsMENBQTBDLEVBQUU7UUFDL0MsTUFBTSxDQUFDLG1CQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM1RCxDQUFDLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyxxREFBcUQsRUFBRTtRQUMxRCxNQUFNLENBQUMsbUJBQVcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDckUsTUFBTSxDQUFDLG1CQUFXLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZFLENBQUMsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLHFEQUFxRCxFQUFFO1FBQzFELE1BQU0sQ0FBQyxhQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNqRCxDQUFDLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyxnREFBZ0QsRUFBRTtRQUNyRCxhQUFLLENBQUMsb0JBQW9CLEVBQUU7WUFDMUIsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ3hCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUN6QixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQywrQ0FBK0MsRUFBRTtRQUNwRCxhQUFLLENBQUMsb0JBQW9CLEVBQUU7WUFDMUIsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ3hCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUN6QixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9xaWRhbnRhL0RvY3VtZW50cy93ZWJwcm9qZWN0cy93ZWJwYWNrLWVsaW1pbmF0ZS1sb2FkZXIvdGVzdC9tYXRjaC50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hdGNoLCBoYXNJbmNsdWRlZCwgaGFzRXhjbHVkZWQgfSBmcm9tICcuLi9zcmMvdXRpbHMvbWF0Y2gnXG5cbmRlc2NyaWJlKCdzdGFydCB0ZXN0IHV0aWxzLm1hdGNoJywgKCkgPT4ge1xuICB0ZXN0KCdoYXNJbmNsdWRlIHNob3VsZCByZXR1cm4gdHJ1ZSB3aGVuIGZpcnN0IGFyZyBpcyB1bmRlZmluZWQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGhhc0luY2x1ZGVkKHVuZGVmaW5lZCwgW10pKS50b0JlKHRydWUpXG4gIH0pXG5cbiAgdGVzdCgnaGFzSW5jbHVkZSBzaG91bGQgcmV0dXJuIHRydWUgd2hlbiBtYXRjaCcsICgpID0+IHtcbiAgICBleHBlY3QoaGFzSW5jbHVkZWQoJ3NyYy9wYWdlcycsIFsnc3JjL3BhZ2VzJ10pKS50b0JlKHRydWUpXG4gIH0pXG5cbiAgdGVzdCgnaGFzRXhjbHVkZSBzaG91bGQgcmV0dXJuIGZhbHNlIHdoZW4gZmlyc3QgYXJnIGlzIHVuZGVmaW5lZCcsICgpID0+IHtcbiAgICBleHBlY3QoaGFzRXhjbHVkZWQodW5kZWZpbmVkLCBbXSkpLnRvQmUoZmFsc2UpXG4gIH0pXG5cbiAgdGVzdCgnaGFzSW5jbHVkZSBzaG91bGQgcmV0dXJuIHRydWUgd2hlbiBtYXRjaCcsICgpID0+IHtcbiAgICBleHBlY3QoaGFzRXhjbHVkZWQoJ3NyYy9wYWdlcycsIFsnc3JjL3BhZ2VzJ10pKS50b0JlKHRydWUpXG4gIH0pXG5cbiAgdGVzdCgnaGFzSW5jbHVkZSBhbmQgaGFzRXhjbHVkZSBzaG91bGQgc3VwcG9ydCBnbG9iIHJlZ2V4JywgKCkgPT4ge1xuICAgIGV4cGVjdChoYXNJbmNsdWRlZCgnc3JjL3BhZ2VzL2hvbWUuanN4JywgWycqKi9wYWdlcy8qKiddKSkudG9CZSh0cnVlKVxuICAgIGV4cGVjdChoYXNFeGNsdWRlZCgnc3JjL3BhZ2VzL2hvbWUuanN4JywgWycqKi9wYWdlcy8qKiddKSkudG9CZSh0cnVlKVxuICB9KVxuXG4gIHRlc3QoJ21hdGNoIHNob3VsZCByZXR1cm4gZmFsc2Ugd2hlbiBvcHRpb25zIGlzIHVuZGVmaW5lZCcsICgpID0+IHtcbiAgICBleHBlY3QobWF0Y2goJ3NyYy9wYWdlcy9ob21lLmpzeCcpKS50b0JlKGZhbHNlKVxuICB9KVxuXG4gIHRlc3QoJ21hdGNoIHNob3VsZCByZXR1cm4gZmFsc2Ugd2hlbiBpbmNsdWRlIG1hdGNoZWQnLCAoKSA9PiB7XG4gICAgbWF0Y2goJ3NyYy9wYWdlcy9ob21lLmpzeCcsIHtcbiAgICAgIHByZXNldHM6IFsncmVhY3Qtcm91dGUnXSxcbiAgICAgIGluY2x1ZGU6IFsnKiovcGFnZXMvKionXSxcbiAgICB9KVxuICB9KVxuXG4gIHRlc3QoJ21hdGNoIHNob3VsZCByZXR1cm4gdHJ1ZSB3aGVuIGV4Y2x1ZGUgbWF0Y2hlZCcsICgpID0+IHtcbiAgICBtYXRjaCgnc3JjL3BhZ2VzL2hvbWUuanN4Jywge1xuICAgICAgcHJlc2V0czogWydyZWFjdC1yb3V0ZSddLFxuICAgICAgZXhjbHVkZTogWycqKi9wYWdlcy8qKiddLFxuICAgIH0pXG4gIH0pXG59KVxuIl0sInZlcnNpb24iOjN9