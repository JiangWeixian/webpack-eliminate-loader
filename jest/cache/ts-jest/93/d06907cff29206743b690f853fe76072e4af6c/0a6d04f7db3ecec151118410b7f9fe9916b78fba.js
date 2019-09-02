"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loadTpl_1 = require("../src/utils/loadTpl");
describe('start load template', function () {
    test('load react-route tpl currently', function () {
        // const reactRouteTpl = fs.readFileSync(path.resolve(__dirname, '../templates/react-route.tpl')).toString()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci90ZXN0L2xvYWRUcGwudGVzdC50cyIsIm1hcHBpbmdzIjoiOztBQUdBLGdEQUF1RDtBQUV2RCxRQUFRLENBQUMscUJBQXFCLEVBQUU7SUFDOUIsSUFBSSxDQUFDLGdDQUFnQyxFQUFFO1FBQ3JDLDRHQUE0RztRQUM1RyxNQUFNLENBQUMsT0FBTyxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3RELENBQUMsQ0FBQyxDQUFBO0lBRUYscURBQXFEO0lBQ3JELDhHQUE4RztJQUM5RywyQkFBMkI7SUFDM0Isc0RBQXNEO0lBQ3RELEtBQUs7SUFFTCx5REFBeUQ7SUFDekQsMkNBQTJDO0lBQzNDLEtBQUs7QUFDUCxDQUFDLENBQUMsQ0FBQSIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvcWlkYW50YS9Eb2N1bWVudHMvd2VicHJvamVjdHMvd2VicGFjay1lbGltaW5hdGUtbG9hZGVyL3Rlc3QvbG9hZFRwbC50ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmltcG9ydCB7IGxvYWRUcGwsIGNhY2hlZCB9IGZyb20gJy4uL3NyYy91dGlscy9sb2FkVHBsJztcblxuZGVzY3JpYmUoJ3N0YXJ0IGxvYWQgdGVtcGxhdGUnLCAoKSA9PiB7XG4gIHRlc3QoJ2xvYWQgcmVhY3Qtcm91dGUgdHBsIGN1cnJlbnRseScsICgpID0+IHtcbiAgICAvLyBjb25zdCByZWFjdFJvdXRlVHBsID0gZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi90ZW1wbGF0ZXMvcmVhY3Qtcm91dGUudHBsJykpLnRvU3RyaW5nKClcbiAgICBleHBlY3QodHlwZW9mIGxvYWRUcGwoJ3JlYWN0LXJvdXRlJykpLnRvQmUoJ3N0cmluZycpXG4gIH0pXG5cbiAgLy8gdGVzdCgnbG9hZCByZWFjdC1yb3V0ZSB0cGwgd2lsbGJlIGNhY2hlZCcsICgpID0+IHtcbiAgLy8gICBjb25zdCByZWFjdFJvdXRlVHBsID0gZnMucmVhZEZpbGVTeW5jKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi90ZW1wbGF0ZXMvcmVhY3Qtcm91dGUudHBsJykpLnRvU3RyaW5nKClcbiAgLy8gICBsb2FkVHBsKCdyZWFjdC1yb3V0ZScpXG4gIC8vICAgZXhwZWN0KGNhY2hlZFsncmVhY3Qtcm91dGUnXSkudG9CZShyZWFjdFJvdXRlVHBsKVxuICAvLyB9KVxuXG4gIC8vIHRlc3QoJ2xvYWQgdW5zdXBwb3J0IHRlbXBsYXRlIHdpbGwgdGhyb3cgZXJyJywgKCkgPT4ge1xuICAvLyAgIGV4cGVjdChsb2FkVHBsKCd4eCcgYXMgYW55KSkudG9UaHJvdygpXG4gIC8vIH0pXG59KSJdLCJ2ZXJzaW9uIjozfQ==