# Cerceis-Library (known as CLIB).
A Quality of life library
- Contains list of quality of life functions that is written in TypeScript and es6.
- Module
- Author: Cerceis

## Installation
```
npm i cerceis-lib@latest
```
## Usage
#### ****Recommended***
```
import { Generate } from "cerceis-lib";
const id = Generate.objectId();
```
or
```
const { Generate } = require("cerceis-lib");
const id = Generate.objectId();
```


## List of functions 
*Documentation written as JSDoc. Most of the IDE should recognize if you hover above the function.

****To make things more organized, functions are separated into their respective parent, simply import the parent to use them.****

## **Catalog still in progress!**

- Delay: Quick async/await wrapper for delay. ex) await Delay(100).
- FromArray: Collection of array methods.
    - getRandom: Get random element from an array.
    - getLargest: Get largest element from an array.
    - getSmallest: Get smaller element from an array.
    - getIntersect: Get intersection of two arrays.
    - shuffle: Shuffle array.
    - thanosSnap: Randomly remove half of the element.
    - toObject: Convert array into object.
- FromNum: Collection of Number methods.
    - roll: Roll percentage. ex) roll(60), 60% will return true.
    - diceRoll: Typical TRPG dice roll. ex) FromNum.diceRoll(3).D(20) = Roll 3 D20 Dice.
    - minMaxScale: Scale number down to 0 ~ 1.
    - unminMaxScale: Revert back to original value.
- FromObject: Collection of Object methods.
    - ObjectToArray: Convert object into Array.
    - flatten: Flatten nested object.
    - getDeepest: Get deepest entries of a nexted object.
- FromString: Collection of String methods.
    - copyToClipboard: Copy string to clipboard.
    - replaceFirst: Replace first N number of letter with desired string.
    - replaceLast: Replace last N number of letter with desired string.
    - parseCookies: Parse http cookies into object.
    - deepClean: Purify string, leaving only 0-9 a-z A-Z.
    - count: Count the number of occurrences of the disired word/letter.
- FromTime: Collection of time methods.
    - jpnDayMap: Not a function. Map value of int to jpn day label
    - format: Format date object into "YYYY-MM-DD HH:mm:ss".
    - toMs: Convert time to ms.
    - toSeconds: Convert time to seconds.
    - toMinutes: Convert time to minutes.
    - toHours: Convert time to hours.
    - toDateTimeShortLocale: Convert time to short human readable date string.
- Gacha: Gacha system.
- Generate: Collection of data generation methods.
    - alphanum: Generate Alphanumeric value.
    - objectId: Generate objectId.
    - int: Gneerate Integer.
    - array: Array of selected element type.
    - alphabate: Generate alphabate.
    - currentDate: Current date "YYYY-MM-DD".
    - currentTime: Current time "HH:mm:ss".
    - currentDateTime: Current date time "YYYY-MM-DD HH:mm:ss".
    - listOfDateOfDays: Generates and return list of date of specified day.
- Is: Type check.
- KMeans: Simplified K-means clustering method.
- Logger: Coloful and advance logging wrapper.
- Obfuscator: Obfuscate string.
- Sha256: Sha256 algorithm.
- Validator: Form validation (in-progress)

## Versions:
|Version|Date|Description|
|--|--|--|
|2.0.1|2022-8-16| Major update, structure changed and added lot's of unfction. 
|1.5.70|2022-8-9| Added FromObject, Moved ArrayToObject to FromArray, and ObjectToArray to FromObject.
|1.5.62|2022-6-9| Added unM
|1.5.30|2022-3-14| Added "Is", a function set to check various type.
|1.5.24|2022-3-08| Added Prob and fixed various bugs.
|1.5|2022-2-16| Added Delay & various fixes. Now supports both CJS and MJS.
|1.3|2021-12-28|Updated documentation, Added JSDoc, ShuffleArray. Merged GenerateObjectId, Array, RandomInt, Alphanum into **Generate**. Merged GetLargest, GetRandomElement, GetSmallest, Intersect into **GetArray**|
|1.2|2021-12-23|Added TomeConverter, KMeans StringPadding|
|1.1|2021-12-17|Added Logger, CopyToClipboard, several readme.md.|

## FAQ
- There is an old version of cerceisLib, what are the difference ?  
    There's one written 2 years ago, althought it still can be used, but it's not recommended. I will be gradually migrating most of the functions to this newer version.