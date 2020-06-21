var sprintf = require('sprintf-js').sprintf;

class CssClass {
    constructor(className, classAttribute, printFormat,responsive) {
        this.className = className;
        this.classAttribute = classAttribute;
        this.printFormat = printFormat;
        this.attributes = classAttribute;
        this.responsive = responsive;
    }
    printOne(number) {
        return sprintf(`.%s-%d {${this.printFormat}}`
            , this.className, number, this.classAttribute[0], number)
    }
    printOneManyAttribute( number) {
        let result = "";
        let formats = "";
        this.attributes.forEach(attrib => {
            formats += sprintf(`${this.printFormat}`,attrib, number)
        });
        result = sprintf(`.%s-%d {%s}`,this.className,number,formats);
        return result;

    }
    printMany(start, end) {
        let result = "";
        for (let i = start; i <= end; i++) {
            result += this.printOne(i);
        }
        return result;
    }
    printManyAndManyAttribute( start, end) {
        let result = "";
        for (let i = start; i <= end; i++) {
            result += this.printOneManyAttribute(i);
        }
        return result;
    }
    static directPrint(className,attrbiute,format) {
        let result = sprintf(format,className,attrbiute);
        return result;
    }
}
module.exports = CssClass;