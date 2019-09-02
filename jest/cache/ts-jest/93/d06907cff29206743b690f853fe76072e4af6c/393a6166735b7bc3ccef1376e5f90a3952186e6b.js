"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validate_1 = require("@/utils/validate");
var match_1 = require("@/utils/match");
exports.presetFactory = {
    create: function (preset) {
        return {
            name: preset.name,
            onInit: function () {
                preset.onInit && preset.onInit();
            },
            onMatch: function (resourcePath, options) {
                if (preset.onMatch) {
                    validate_1.validate([[typeof preset.onMatch !== 'function', 'preset.onMatch should be function']]);
                    return preset.onMatch(resourcePath, options);
                }
                return match_1.match(resourcePath, options);
            },
            onReturn: function (source) {
                if (preset.onReturn) {
                    validate_1.validate([[typeof preset.onReturn !== 'function', 'preset.onReturn should be function']]);
                    return preset.onReturn(source);
                }
                return source;
            },
        };
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci9zcmMvcHJlc2V0cy9mYWN0b3J5LnRzIiwibWFwcGluZ3MiOiI7O0FBQ0EsNkNBQTJDO0FBQzNDLHVDQUFxQztBQUV4QixRQUFBLGFBQWEsR0FBRztJQUMzQixNQUFNLEVBQU4sVUFBTyxNQUFjO1FBQ25CLE9BQU87WUFDTCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDakIsTUFBTSxFQUFFO2dCQUNOLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ2xDLENBQUM7WUFDRCxPQUFPLEVBQUUsVUFBQyxZQUFvQixFQUFFLE9BQWdCO2dCQUM5QyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7b0JBQ2xCLG1CQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUUsbUNBQW1DLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ3ZGLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUE7aUJBQzdDO2dCQUNELE9BQU8sYUFBSyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUNyQyxDQUFDO1lBQ0QsUUFBUSxFQUFFLFVBQUEsTUFBTTtnQkFDZCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7b0JBQ25CLG1CQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUUsb0NBQW9DLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ3pGLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtpQkFDL0I7Z0JBQ0QsT0FBTyxNQUFNLENBQUE7WUFDZixDQUFDO1NBQ0YsQ0FBQTtJQUNILENBQUM7Q0FDRixDQUFBIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9xaWRhbnRhL0RvY3VtZW50cy93ZWJwcm9qZWN0cy93ZWJwYWNrLWVsaW1pbmF0ZS1sb2FkZXIvc3JjL3ByZXNldHMvZmFjdG9yeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmVzZXQsIE9wdGlvbnMgfSBmcm9tICdAL3R5cGluZ3MnXG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gJ0AvdXRpbHMvdmFsaWRhdGUnXG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gJ0AvdXRpbHMvbWF0Y2gnXG5cbmV4cG9ydCBjb25zdCBwcmVzZXRGYWN0b3J5ID0ge1xuICBjcmVhdGUocHJlc2V0OiBQcmVzZXQpOiBSZXF1aXJlZDxQcmVzZXQ+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogcHJlc2V0Lm5hbWUsXG4gICAgICBvbkluaXQ6ICgpID0+IHtcbiAgICAgICAgcHJlc2V0Lm9uSW5pdCAmJiBwcmVzZXQub25Jbml0KClcbiAgICAgIH0sXG4gICAgICBvbk1hdGNoOiAocmVzb3VyY2VQYXRoOiBzdHJpbmcsIG9wdGlvbnM6IE9wdGlvbnMpID0+IHtcbiAgICAgICAgaWYgKHByZXNldC5vbk1hdGNoKSB7XG4gICAgICAgICAgdmFsaWRhdGUoW1t0eXBlb2YgcHJlc2V0Lm9uTWF0Y2ggIT09ICdmdW5jdGlvbicsICdwcmVzZXQub25NYXRjaCBzaG91bGQgYmUgZnVuY3Rpb24nXV0pXG4gICAgICAgICAgcmV0dXJuIHByZXNldC5vbk1hdGNoKHJlc291cmNlUGF0aCwgb3B0aW9ucylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2gocmVzb3VyY2VQYXRoLCBvcHRpb25zKVxuICAgICAgfSxcbiAgICAgIG9uUmV0dXJuOiBzb3VyY2UgPT4ge1xuICAgICAgICBpZiAocHJlc2V0Lm9uUmV0dXJuKSB7XG4gICAgICAgICAgdmFsaWRhdGUoW1t0eXBlb2YgcHJlc2V0Lm9uUmV0dXJuICE9PSAnZnVuY3Rpb24nLCAncHJlc2V0Lm9uUmV0dXJuIHNob3VsZCBiZSBmdW5jdGlvbiddXSlcbiAgICAgICAgICByZXR1cm4gcHJlc2V0Lm9uUmV0dXJuKHNvdXJjZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291cmNlXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbn1cbiJdLCJ2ZXJzaW9uIjozfQ==