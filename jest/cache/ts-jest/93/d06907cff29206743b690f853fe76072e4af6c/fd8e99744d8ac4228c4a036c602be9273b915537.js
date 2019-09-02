"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loadTpl_1 = require("@/utils/loadTpl");
var tpl = '';
exports.ReactRoute = {
    name: 'react-route',
    onInit: function () {
        if (tpl) {
            return;
        }
        tpl = loadTpl_1.loadTpl('react-route');
    },
    onReturn: function (source) {
        return tpl || source;
    },
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci9zcmMvcHJlc2V0cy9yZWFjdC1yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUd6QyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUE7QUFFQyxRQUFBLFVBQVUsR0FBVztJQUNoQyxJQUFJLEVBQUUsYUFBYTtJQUNuQixNQUFNO1FBQ0osSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFNO1NBQ1A7UUFDRCxHQUFHLEdBQUcsaUJBQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBQ0QsUUFBUSxZQUFDLE1BQU07UUFDYixPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUE7SUFDdEIsQ0FBQztDQUNGLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci9zcmMvcHJlc2V0cy9yZWFjdC1yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkVHBsIH0gZnJvbSAnQC91dGlscy9sb2FkVHBsJ1xuaW1wb3J0IHsgUHJlc2V0IH0gZnJvbSAnQC90eXBpbmdzJ1xuXG5sZXQgdHBsID0gJydcblxuZXhwb3J0IGNvbnN0IFJlYWN0Um91dGU6IFByZXNldCA9IHtcbiAgbmFtZTogJ3JlYWN0LXJvdXRlJyxcbiAgb25Jbml0KCkge1xuICAgIGlmICh0cGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0cGwgPSBsb2FkVHBsKCdyZWFjdC1yb3V0ZScpXG4gIH0sXG4gIG9uUmV0dXJuKHNvdXJjZSkge1xuICAgIHJldHVybiB0cGwgfHwgc291cmNlXG4gIH0sXG59XG4iXSwidmVyc2lvbiI6M30=