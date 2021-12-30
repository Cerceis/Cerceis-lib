# Cerceis-Library (known as CLIB).
A Quality of life library
- Contains list of quality of life functions that is written in TypeScript and es6.
- Module
- Author: Cerceis

## Installation
    npm i cerceis-lib@latest

## Usage

    import { CopyToClipboard } from "cerceis-lib";
    const id = CopyToClipboard("It works!");


## List of functions 
*Documentation written as JSDoc.
|Name|Status|Documentation|Description|
|--|--|--|--| 
|ArrayToObject|Completed|o| Convert a 2-dimentional array ([[key, value], [key2, value2],...]) into Object.|
|CopyToClipboard|Completed|o| Copy string into clipboard.
|FromArray|Completed|o| Various functions to manipulate array. (Shuffle, intersect, smallest, random, etc...)
|Generate|Completed|o| Generates various kinds of values.(objectId, array, alphanum..etc)
|KMeans|Completed|x| Group arrays of numbers into cluster with k-means algorithm.
|Logger|Completed|o| A better console.log with color and timestamp included.
|MinMaxScaler|Completed|o| Scale value down to range between 0 ~ 1.
|Obfuscator|Completed|x| Obfuscate strings.
|ObjectToArray|Completed|o| Convert Object into a 2-dimentional array ([[key, value], [key2, value2],...]).|
|ParseCookie|Completed|x| Takes http cookie string as input and turn it into an object.
|Sha256|Completed|x| Hash strings using SHA256.
|TimeConverter|Completed|x| List of functions that convert time into a single unit. (Ex: 18:45:55 to miliseconds, etc)
|Validator|Completed|o| A value validator, mostly used in form validation.

## Versions:
|Version|Date|Description|
|--|--|--|
|1.3|2012-12-28|Updated documentation, Added JSDoc, ShuffleArray. Merged GenerateObjectId, Array, RandomInt, Alphanum into **Generate**. Merged GetLargest, GetRandomElement, GetSmallest, Intersect into **GetArray**|
|1.2|2012-12-23|Added TomeConverter, KMeans StringPadding|
|1.1|2012-12-17|Added Logger, CopyToClipboard, several readme.md.|

## FAQ
- There is an old version of cerceisLib, what are the difference ?  
    There's one written 2 years ago, althought it still can be used, but it's not recommended. I will be gradually migrating most of the functions to this newer version.