import { __decorate } from "tslib";
import { ANALYZE_FOR_ENTRY_COMPONENTS, NgModule } from '@angular/core';
import { AgGridAngular } from './ag-grid-angular.component';
import { AgGridColumn } from './ag-grid-column.component';
var AgGridModule = /** @class */ (function () {
    function AgGridModule() {
    }
    AgGridModule_1 = AgGridModule;
    AgGridModule.withComponents = function (components) {
        return {
            ngModule: AgGridModule_1,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ],
        };
    };
    AgGridModule.forRoot = function (components) {
        return {
            ngModule: AgGridModule_1,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ],
        };
    };
    var AgGridModule_1;
    AgGridModule = AgGridModule_1 = __decorate([
        NgModule({
            declarations: [AgGridAngular, AgGridColumn],
            imports: [],
            exports: [AgGridAngular, AgGridColumn]
        })
    ], AgGridModule);
    return AgGridModule;
}());
export { AgGridModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWctZ3JpZC1hbmd1bGFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnLWdyaWQtYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9hZy1ncmlkLWFuZ3VsYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsNEJBQTRCLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBT3hEO0lBQUE7SUFtQkEsQ0FBQztxQkFuQlksWUFBWTtJQUNkLDJCQUFjLEdBQXJCLFVBQXNCLFVBQWdCO1FBQ2xDLE9BQU87WUFDSCxRQUFRLEVBQUUsY0FBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1AsRUFBQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO2FBQzdFO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFFTSxvQkFBTyxHQUFkLFVBQWUsVUFBZ0I7UUFDM0IsT0FBTztZQUNILFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDUCxFQUFDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUM7YUFDN0U7U0FDSixDQUFDO0lBQ04sQ0FBQzs7SUFqQlEsWUFBWTtRQUx4QixRQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDO1lBQzNDLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQztTQUN6QyxDQUFDO09BQ1csWUFBWSxDQW1CeEI7SUFBRCxtQkFBQztDQUFBLEFBbkJELElBbUJDO1NBbkJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtBZ0dyaWRBbmd1bGFyfSBmcm9tICcuL2FnLWdyaWQtYW5ndWxhci5jb21wb25lbnQnO1xuaW1wb3J0IHtBZ0dyaWRDb2x1bW59IGZyb20gJy4vYWctZ3JpZC1jb2x1bW4uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtBZ0dyaWRBbmd1bGFyLCBBZ0dyaWRDb2x1bW5dLFxuICAgIGltcG9ydHM6IFtdLFxuICAgIGV4cG9ydHM6IFtBZ0dyaWRBbmd1bGFyLCBBZ0dyaWRDb2x1bW5dXG59KVxuZXhwb3J0IGNsYXNzIEFnR3JpZE1vZHVsZSB7XG4gICAgc3RhdGljIHdpdGhDb21wb25lbnRzKGNvbXBvbmVudHM/OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPGFueT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEFnR3JpZE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHtwcm92aWRlOiBBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTLCB1c2VWYWx1ZTogY29tcG9uZW50cywgbXVsdGk6IHRydWV9XG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JSb290KGNvbXBvbmVudHM/OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPGFueT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEFnR3JpZE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHtwcm92aWRlOiBBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTLCB1c2VWYWx1ZTogY29tcG9uZW50cywgbXVsdGk6IHRydWV9XG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgIH1cblxufVxuIl19