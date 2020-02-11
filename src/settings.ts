"use strict";

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;

export class VisualSettings extends DataViewObjectsParser {
  public dataPoint: dataPointSettings = new dataPointSettings();
}

export class dataPointSettings {
  public defaultColor: string = "";
  public showAllDataPoints: boolean = true;
  public fill: string = "";
  public fillRule: string = "";
  public fontSize: number = 12;
}