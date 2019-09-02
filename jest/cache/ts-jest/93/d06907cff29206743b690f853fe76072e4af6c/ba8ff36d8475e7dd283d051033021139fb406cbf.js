"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * validate
 *
 * takes an array of arrays of validations and
 * throws if an error occurs
 */
exports.validate = function (validations) {
    if (process.env.NODE_ENV !== 'production') {
        for (var _i = 0, validations_1 = validations; _i < validations_1.length; _i++) {
            var validation = validations_1[_i];
            var condition = validation[0];
            var errorMessage = validation[1];
            if (condition) {
                throw new Error(errorMessage);
            }
        }
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci9zcmMvdXRpbHMvdmFsaWRhdGUudHMiLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Ozs7R0FLRztBQUNVLFFBQUEsUUFBUSxHQUFHLFVBQUMsV0FBeUI7SUFDaEQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLEVBQUU7UUFDekMsS0FBeUIsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUU7WUFBakMsSUFBTSxVQUFVLG9CQUFBO1lBQ25CLElBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUMvQixJQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbEMsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTthQUM5QjtTQUNGO0tBQ0Y7QUFDSCxDQUFDLENBQUEiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL3FpZGFudGEvRG9jdW1lbnRzL3dlYnByb2plY3RzL3dlYnBhY2stZWxpbWluYXRlLWxvYWRlci9zcmMvdXRpbHMvdmFsaWRhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvbiB9IGZyb20gJ0AvdHlwaW5ncydcblxuLyoqXG4gKiB2YWxpZGF0ZVxuICpcbiAqIHRha2VzIGFuIGFycmF5IG9mIGFycmF5cyBvZiB2YWxpZGF0aW9ucyBhbmRcbiAqIHRocm93cyBpZiBhbiBlcnJvciBvY2N1cnNcbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRlID0gKHZhbGlkYXRpb25zOiBWYWxpZGF0aW9uW10pOiB2b2lkID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKGNvbnN0IHZhbGlkYXRpb24gb2YgdmFsaWRhdGlvbnMpIHtcbiAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IHZhbGlkYXRpb25bMF1cbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHZhbGlkYXRpb25bMV1cbiAgICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==