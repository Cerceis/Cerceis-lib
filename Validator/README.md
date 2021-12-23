@Example
```
import { Validator } from validator
const validator = new Validator()
const testValue = "thisisNotavalidEmailemail.com"

validator.value(testValue).min(2).isEmail().valid()
validator.errors.length 
//Should be larger than 0 because there's an error
//Console.log(validator.errors) for more error details
```



# Validator

## Description
A validator to verify types of a value. Mostly used in form validation.

## Usage
```
import { Validator } from <path to validator.ts>
const validator = new Validator()

const inputTextA = ""

validator.value(<input value>).<chain()>.<chain()>....valid()
validator.errors to check if has errors
```

## Params
|Name|Type|Default|Required|Description|
|--|--|--|--|--|
|m|number|N/A|o|Input value|
|min|number|N/A|o|Specify minimum possible value of the original input|
|max|number|N/A|o|Specify maximum possible value of the original input|

## Return 
number