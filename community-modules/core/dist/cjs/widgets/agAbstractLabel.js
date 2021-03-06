/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v25.1.0
 * @link http://www.ag-grid.com/
 * @license MIT
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("./component");
var context_1 = require("../context/context");
var dom_1 = require("../utils/dom");
var AgAbstractLabel = /** @class */ (function (_super) {
    __extends(AgAbstractLabel, _super);
    function AgAbstractLabel(config, template) {
        var _this = _super.call(this, template) || this;
        _this.labelSeparator = '';
        _this.labelAlignment = 'left';
        _this.label = '';
        _this.config = config || {};
        return _this;
    }
    AgAbstractLabel.prototype.postConstruct = function () {
        dom_1.addCssClass(this.getGui(), 'ag-labeled');
        dom_1.addCssClass(this.eLabel, 'ag-label');
        var _a = this.config, labelSeparator = _a.labelSeparator, label = _a.label, labelWidth = _a.labelWidth, labelAlignment = _a.labelAlignment;
        if (labelSeparator != null) {
            this.setLabelSeparator(labelSeparator);
        }
        if (label != null) {
            this.setLabel(label);
        }
        if (labelWidth != null) {
            this.setLabelWidth(labelWidth);
        }
        this.setLabelAlignment(labelAlignment || this.labelAlignment);
        this.refreshLabel();
    };
    AgAbstractLabel.prototype.refreshLabel = function () {
        dom_1.clearElement(this.eLabel);
        if (typeof this.label === 'string') {
            this.eLabel.innerText = this.label + this.labelSeparator;
        }
        else if (this.label) {
            this.eLabel.appendChild(this.label);
        }
        if (this.label === '') {
            dom_1.addCssClass(this.eLabel, 'ag-hidden');
            this.eLabel.setAttribute('role', 'presentation');
        }
        else {
            dom_1.removeCssClass(this.eLabel, 'ag-hidden');
            this.eLabel.removeAttribute('role');
        }
    };
    AgAbstractLabel.prototype.setLabelSeparator = function (labelSeparator) {
        if (this.labelSeparator === labelSeparator) {
            return this;
        }
        this.labelSeparator = labelSeparator;
        if (this.label != null) {
            this.refreshLabel();
        }
        return this;
    };
    AgAbstractLabel.prototype.getLabelId = function () {
        this.eLabel.id = this.eLabel.id || "ag-" + this.getCompId() + "-label";
        return this.eLabel.id;
    };
    AgAbstractLabel.prototype.getLabel = function () {
        return this.label;
    };
    AgAbstractLabel.prototype.setLabel = function (label) {
        if (this.label === label) {
            return this;
        }
        this.label = label;
        this.refreshLabel();
        return this;
    };
    AgAbstractLabel.prototype.setLabelAlignment = function (alignment) {
        var eGui = this.getGui();
        dom_1.addOrRemoveCssClass(eGui, 'ag-label-align-left', alignment === 'left');
        dom_1.addOrRemoveCssClass(eGui, 'ag-label-align-right', alignment === 'right');
        dom_1.addOrRemoveCssClass(eGui, 'ag-label-align-top', alignment === 'top');
        return this;
    };
    AgAbstractLabel.prototype.setLabelWidth = function (width) {
        if (this.label == null) {
            return this;
        }
        dom_1.setElementWidth(this.eLabel, width);
        return this;
    };
    __decorate([
        context_1.PostConstruct
    ], AgAbstractLabel.prototype, "postConstruct", null);
    return AgAbstractLabel;
}(component_1.Component));
exports.AgAbstractLabel = AgAbstractLabel;

//# sourceMappingURL=agAbstractLabel.js.map
