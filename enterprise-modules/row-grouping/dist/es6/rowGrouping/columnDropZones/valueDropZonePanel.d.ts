import { Column, ITooltipParams } from "@ag-grid-community/core";
import { BaseDropZonePanel } from "./baseDropZonePanel";
export declare class ValuesDropZonePanel extends BaseDropZonePanel {
    private columnController;
    private loggerFactory;
    private dragAndDropService;
    private columnApi;
    private gridApi;
    constructor(horizontal: boolean);
    private passBeansUp;
    getTooltipParams(): ITooltipParams;
    protected getIconName(): string;
    protected isColumnDroppable(column: Column): boolean;
    protected updateColumns(columns: Column[]): void;
    protected getExistingColumns(): Column[];
}
