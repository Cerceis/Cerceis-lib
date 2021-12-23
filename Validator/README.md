# Validator

## Description
A validator to verify types of a value. Mostly used in form validation.

## Usage
```
import { Validator } from <path to validator.ts>
const validator = new Validator()

const form = {
    name: "Cerceis",
    age: 99,
    email: "cerceis@cerceis.com",
    emailConfirm: "cer@cerceis.com"
}

validator.value(form.name).min(3).max(10).noSpecials().verify()
validator.value(form.age).min(20).max(100).verify()
validator.value(form.email).isEmail().verify()
validator.value(form.emailConfirm).isSameAs(form.email).verify()

if(validator.hasError()){
    /* Your Error handle here*/
    console.log(validator.errors)
    /*
        [
            {
                errored: 'cer@cerceis.com',
                code: 'NOT_SAME',
                labelEn: 'Value not same',
                labelJpn: '再確認できませんでした'
            }
        ]
    */
}
else{
    /* Do something else */
}
```

## Types / interfaces
```
interface Error{
    errored: any,
    code: string,
    labelEn: string,
    labelJpn: string
}
```

## List of functions
### 1. value(): this
Set the value to verify.
#### Params
|Name|Type|Default|Required|Description|
|--|--|--|--|--|
|inputValue|any|N/A|o|Your input value to verify.|

### 2. min(): this
Check minimum, if the input value is a string, it will check it's length. If it's a number, it will check mathematically. (This does not check for null | undefined ! Use **required()** to check null values. )
#### Params
|Name|Type|Default|Required|Description|
|--|--|--|--|--|
|min|number|N/A|o|Minimum value|

### 3. max(): this
Ommited, same as **min()**. Checks maximum instead.
#### Params
|Name|Type|Default|Required|Description|
|--|--|--|--|--|
|max|number|N/A|o|Maximum value|

### 4. isEmail(): this
Check if the input value is an valid email.

### 5. required(): this
Check if the input value is not null | undefined | empty string.

### 6 alphanumeric(): this
Check if the input value is alphanumeic. (a~Z, 0~9)

### 7. noSpecials(): this
Check if the input value contains special symbols. Does not detect ***space*** as specials by default.
#### Params
|Name|Type|Default|Required|Description|
|--|--|--|--|--|
|space|boolean|true|x|Detect space as special.|
|extendJpn|boolean|false|x|Detect Japanese synbols as well.|

### 8 isUUIDv4(): this
Check if the input value is valid v4 uuid.

### 9. isSameAs(): this
Check if the input value is same as the input value.
#### Params
|Name|Type|Default|Required|Description|
|--|--|--|--|--|
|value|any|x|o|Value to compare to|

### 10. verify(): boolean | Error[]
Verify and register if the value has error.
#### Params
|Name|Type|Default|Required|Description|
|--|--|--|--|--|
|returnErrors|boolean|false|x|Return the Error instead|

***@Depreciated v1.3 Use verify instead.***
### 11. valid(): boolean | Error[]
Verify and register if the value has error.
#### Params
|Name|Type|Default|Required|Description|
|--|--|--|--|--|
|returnErrors|boolean|false|x|Return the Error instead|

### 12 hasError(): boolean
Check if the validator detects any errors until now.