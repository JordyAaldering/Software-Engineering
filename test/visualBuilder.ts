import powerbi from "powerbi-visuals-api";
import { Visual as VisualClass } from "../src/visual";
import { VisualBuilderBase } from "powerbi-visuals-utils-testutils";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;

export class VisualBuilder extends VisualBuilderBase<VisualClass> {
    constructor(width: number, height: number) {
        super(width, height);
    }

    protected build(options: VisualConstructorOptions) {
        return new VisualClass(options);
    }

    public get mainElement() {
        return this.element.children("svg");
    }
}