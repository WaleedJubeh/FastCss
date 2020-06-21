# FastCss

 Are you very tired  to repeat yourself ! 😴😓

 In each project you wrote the same code! 🌌


 Are you need to make css code or override the classes for each responsive query ? 🚗🚙🚌🚎

## We Are the Solution ✅✅✅

# Installation

### Just copy and past 💯
## css

```
<link rel="stylesheet" href="https://1562868238.rsc.cdn77.org/fastcss.min.css">
```
Or  [Download me now !](https://1562868238.rsc.cdn77.org/fastcss.min.css)

## scss
### [scss Link](https://1562868238.rsc.cdn77.org/fastcss.min.scss)

# Usage
## key maps

    w: width

    h: height

    m: margin;

    p: padding;

    l:left;

    r:right;

    t: top

    b: bottom

    x: left and right

    y: top and button

    fz: font-size

    sm: mobile resolution from 0 to 1024

    md: meduim screen from 1025 to 1599

    lg: large sreen from 1600 to infinity

    auto: auto value.
### Margin 

static margin from 1px to 100px
```
m-1, m-2, m-3 ,...
```
static margin in one direction
```
m-l-1, m-r-1, m-b-3,m-t-5,...
```

Static margin in two sides (top and bottom) or (left and right)

```
p-x-5, p-y-5
```
    p-x-5 ->
         padding-left:5px;
         padding-right-5px;
    p-y-5 ->
         padding-top:5px;
         padding-bottom-5px;
### Padding 

static padding from 1px to 100px -> padding: {number}px
```
p-auto, p-1, p-2, p-3 ,...
```
static padding in one direction
```
p-l-1, p-r-1, p-b-3,p-t-5,...
```

### example
```
<div class="p-x-100 p-y-100 m-t-10 m-b-10"></div>
<div class="p-l-20 p-y-20 p-t-30 p-b-30"></div>
```
## Font size

### it can be easily using fz class with the size

```
fz-1,fz-20, fz-15,fz-16
```
    fz-20 -> font-size: 20px;


# Media Query

## We have three main resolutions

    mobiles resolution from width 0px to 1024px

    meduim screens from 1025px to 1599px

    Big screens from 1600px and above

### we just add the screen prefix before the number

    [className-prefex-number]

    examples:
    
        sm -> fz-sm-10  p-sm-x-10    p-sm-x-20
        
        md -> fz-md-20  p-md-x-20    p-md-y-20
        
        lg -> fz-lg-30  p-lg-x-20    p-lg-y-20
    
# Flex

    f-box -> display:flex

    f-t-c -> align-items: center
    f-t-start -> align-items: flex-start
    f-t-end -> align-items: flex-end
    
    f-j-c ->        justify-content: center
    f-j-start ->    justify-content: flex-start
    f-j-between ->  justify-content: space-between
    f-j-around ->   justify-content: space-around
    f-j-evenly ->   justify-content: space-evenly
    
# Width & Height

### we provide height and width from 0px to 100px.

    Example:
        h-1 -> height:1px;
        w-40 -> width: 40px;
### Also we provide 100% value
        h-full -> height:100%;
        w-full -> width:100%;

Example:
 ```
<div class="h-full w-full"></div>
 ```

 # Make your version


You can change the generated classes range by cloning the project then changing the following variables in the app.js
```
const START_FROM = 0;
const END_TO = 100;
```

### Don't fotget to support me by giving the project a nice star