const CssClass = require("./classes/CssClass.js");
const fs = require('fs');
const START_FROM = 0;
const END_TO = 100;

const reducerOneAttribute = (accumulator, currentValue) => accumulator + currentValue.printMany(START_FROM, END_TO);
const reduceManyAttribute = (accumulator, currentValue) => accumulator + currentValue.printManyAndManyAttribute(START_FROM, END_TO);
responsiveRapper = (config, data) => {
    string = "@media only screen";
    if (config['min-width'])
        string += ` and (min-width:${config['min-width']}) `;
    if (config['max-width'])
        string += ` and (max-width:${config['max-width']}) `;
    string = `${string}{ ${data} }`;
    return string;
}
let smallScreenResponsive = {
    'min-width': 0,
    'max-width': 1024,
}

let meduimScreenResponsive = {
    'min-width': 1025,
    'max-width': 1599,
}

let bigScreenResponsive = {
    'min-width': 1600,
}

let manyClassesOneAttribute = [
    new CssClass("m", ["margin"], "%s:%dpx !important"),
    new CssClass("wpx", ["width"], "%s:%dpx !important"),
    new CssClass("hpx", ["height"], "%s:%dpx !important"),
    new CssClass("m-r", ["margin-right"], "%s:%dpx !important"),
    new CssClass("m-l", ["margin-left"], "%s:%dpx !important"),
    new CssClass("m-t", ["margin-top"], "%s:%dpx !important"),
    new CssClass("m-b", ["margin-bottom"], "%s:%dpx !important"),
    new CssClass("p", ["padding"], "%s:%dpx !important"),
    new CssClass("p-r", ["padding-right"], "%s:%dpx !important"),
    new CssClass("p-l", ["padding-left"], "%s:%dpx !important"),
    new CssClass("p-t", ["padding-top"], "%s:%dpx !important"),
    new CssClass("p-b", ["padding-bottom"], "%s:%dpx !important"),
    new CssClass("fz", ["font-size"], "%s:%dpx !important"),
]
let manyClassesManyAttribute = [
    new CssClass("m-x", ["margin-right", "margin-left"], "%s:%dpx !important;"),
    new CssClass("m-y", ["margin-top", "margin-bottom"], "%s:%dpx !important;"),
    new CssClass("p-x", ["margin-right", "margin-left"], "%s:%dpx !important;"),
    new CssClass("p-y", ["padding-top", "padding-bottom"], "%s:%dpx !important;"),
]
let manyClassesOneAttributeMeduimScreen = [
    new CssClass("m-md", ["margin"], "%s:%dpx !important"),
    new CssClass("m-r-md", ["margin-right"], "%s:%dpx !important"),
    new CssClass("m-l-md", ["margin-left"], "%s:%dpx !important"),
    new CssClass("m-t-md", ["margin-top"], "%s:%dpx !important"),
    new CssClass("m-b-md", ["margin-bottom"], "%s:%dpx !important"),
    new CssClass("p-md", ["padding"], "%s:%dpx !important"),
    new CssClass("p-r-md", ["padding-right"], "%s:%dpx !important"),
    new CssClass("p-l-md", ["padding-left"], "%s:%dpx !important"),
    new CssClass("p-t-md", ["padding-top"], "%s:%dpx !important"),
    new CssClass("p-b-md", ["padding-bottom"], "%s:%dpx !important"),
    new CssClass("fz-md", ["font-size"], "%s:%dpx !important"),
    new CssClass("wpx-md", ["width"], "%s:%dpx !important"),
    new CssClass("hpx-md", ["height"], "%s:%dpx !important"),
    new CssClass("m-x-md", ["margin-right", "margin-left"], "%s:%dpx !important;"),
    new CssClass("m-y-md", ["margin-top", "margin-bottom"], "%s:%dpx !important;"),
    new CssClass("p-x-md", ["margin-right", "margin-left"], "%s:%dpx !important;"),
    new CssClass("p-y-md", ["padding-top", "padding-bottom"], "%s:%dpx !important;"),

]
let manyClassesOneAttributeSmallScreen = [
    new CssClass("m-sm", ["margin"], "%s:%dpx !important"),
    new CssClass("m-r-sm", ["margin-right"], "%s:%dpx !important"),
    new CssClass("m-l-sm", ["margin-left"], "%s:%dpx !important"),
    new CssClass("m-t-sm", ["margin-top"], "%s:%dpx !important"),
    new CssClass("m-b-sm", ["margin-bottom"], "%s:%dpx !important"),
    new CssClass("p-sm", ["padding"], "%s:%dpx !important"),
    new CssClass("p-r-sm", ["padding-right"], "%s:%dpx !important"),
    new CssClass("p-l-sm", ["padding-left"], "%s:%dpx !important"),
    new CssClass("p-t-sm", ["padding-top"], "%s:%dpx !important"),
    new CssClass("p-b-sm", ["padding-bottom"], "%s:%dpx !important"),
    new CssClass("fz-sm", ["font-size"], "%s:%dpx !important"),
    new CssClass("wpx-sm", ["width"], "%s:%dpx !important"),
    new CssClass("hpx-sm", ["height"], "%s:%dpx !important"),
    new CssClass("m-x-sm", ["margin-right", "margin-left"], "%s:%dpx !important;"),
    new CssClass("m-y-sm", ["margin-top", "margin-bottom"], "%s:%dpx !important;"),
    new CssClass("p-x-sm", ["margin-right", "margin-left"], "%s:%dpx !important;"),
    new CssClass("p-y-sm", ["padding-top", "padding-bottom"], "%s:%dpx !important;"),

]
let manyClassesOneAttributeBigScreen = [
    new CssClass("m-lg", ["margin"], "%s:%dpx !important"),
    new CssClass("m-r-lg", ["margin-right"], "%s:%dpx !important"),
    new CssClass("m-l-lg", ["margin-left"], "%s:%dpx !important"),
    new CssClass("m-t-lg", ["margin-top"], "%s:%dpx !important"),
    new CssClass("m-b-lg", ["margin-bottom"], "%s:%dpx !important"),
    new CssClass("p-lg", ["padding"], "%s:%dpx !important"),
    new CssClass("p-r-lg", ["padding-right"], "%s:%dpx !important"),
    new CssClass("p-l-lg", ["padding-left"], "%s:%dpx !important"),
    new CssClass("p-t-lg", ["padding-top"], "%s:%dpx !important"),
    new CssClass("p-b-lg", ["padding-bottom"], "%s:%dpx !important"),
    new CssClass("fz-lg", ["font-size"], "%s:%dpx !important"),
    new CssClass("wpx-lg", ["width"], "%s:%dpx !important"),
    new CssClass("hpx-lg", ["height"], "%s:%dpx !important"),
    new CssClass("m-x-lg", ["margin-right", "margin-left"], "%s:%dpx !important;"),
    new CssClass("m-y-lg", ["margin-top", "margin-bottom"], "%s:%dpx !important;"),
    new CssClass("p-x-lg", ["margin-right", "margin-left"], "%s:%dpx !important;"),
    new CssClass("p-y-lg", ["padding-top", "padding-bottom"], "%s:%dpx !important;"),

]
let results = "";
results = manyClassesOneAttribute.reduce(reducerOneAttribute, "");
results += manyClassesManyAttribute.reduce(reduceManyAttribute, "");
// Generate auto classes
results += CssClass.directPrint("m-auto", "margin", ".%s{%s:auto}");
results += CssClass.directPrint("p-auto", "padding", ".%s{%s:auto}");
results += CssClass.directPrint("f-box", "display", ".%s{%s:flex}");
results += CssClass.directPrint("f-t-c", "align-items", ".%s{%s:center}");
results += CssClass.directPrint("f-t-start", "align-items", ".%s{%s:flex-start}");
results += CssClass.directPrint("f-t-flex", "align-items", ".%s{%s:flex-end}");
results += CssClass.directPrint("f-j-c", "justify-content", ".%s{%s:center}");
results += CssClass.directPrint("f-j-start", "justify-content", ".%s{%s:flex-start}");
results += CssClass.directPrint("f-j-between", "justify-content", ".%s{%s:space-between}");
results += CssClass.directPrint("f-j-around", "justify-content", ".%s{%s:space-around}");
results += CssClass.directPrint("f-j-evenly", "justify-content", ".%s{%s:space-evenly}");
results += CssClass.directPrint("f-gr-1", "flex-grow", ".%s{%s:1}");
results += CssClass.directPrint("f-gr-0", "flex-grow", ".%s{%s:0}");
results += CssClass.directPrint("f-sh-1", "flex-grow", ".%s{%s:1}");
results += CssClass.directPrint("f-sh-0", "flex-grow", ".%s{%s:0}");
results += CssClass.directPrint("h-full", "height", ".%s{%s:100%%}");
results += CssClass.directPrint("w-full", "width", ".%s{%s:100%%}");

let responsive = "";

responsive = manyClassesOneAttributeSmallScreen.reduce(reduceManyAttribute, "");
responsive += CssClass.directPrint("m-r-sm-auto", "margin-right", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("p-r-sm-auto", "padding-right", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("m-l-sm-auto", "margin-left", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("p-l-sm-auto", "padding-left", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("m-t-sm-auto", "margin-top", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("p-t-sm-auto", "padding-top", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("m-b-sm-auto", "margin-bottom", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("p-b-sm-auto", "padding-bottom", ".%s{%s:auto !important}");

results += responsiveRapper(smallScreenResponsive, responsive);

responsive = manyClassesOneAttributeMeduimScreen.reduce(reduceManyAttribute, "");
responsive += CssClass.directPrint("m-r-md-auto", "margin-right", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("p-r-md-auto", "padding-right", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("m-l-md-auto", "margin-left", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("p-l-md-auto", "padding-left", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("m-t-md-auto", "margin-top", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("p-t-md-auto", "padding-top", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("m-b-md-auto", "margin-bottom", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("p-b-md-auto", "padding-bottom", ".%s{%s:auto !important}");

results += responsiveRapper(meduimScreenResponsive, responsive);

responsive = manyClassesOneAttributeBigScreen.reduce(reduceManyAttribute, "");
responsive += CssClass.directPrint("m-r-lg-auto", "margin-right", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("p-r-lg-auto", "padding-right", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("m-l-lg-auto", "margin-left", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("p-l-lg-auto", "padding-left", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("m-t-lg-auto", "margin-top", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("p-t-lg-auto", "padding-top", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("m-b-lg-auto", "margin-bottom", ".%s{%s:auto !important}");
responsive += CssClass.directPrint("p-b-lg-auto", "padding-bottom", ".%s{%s:auto !important}");

results += responsiveRapper(bigScreenResponsive, responsive);

fs.writeFileSync("./dist/output/fastcss.min.scss", results);
fs.writeFileSync("./dist/output/fastcss.min.css", results);

console.log(results.length);