# Logger

## Description
A better console.log with color and timestamp included.

## Example
```
Logger.log("Hello")

//Output
[LOG] - 2021/12/23 16:22:40    Hello
```
## Types / interfaces
```
export type Color = "Red" | "Green" | "Yellow" |
"Blue" | "Magenta" | "Cyan" | "White"
```

## List of functions
### 1. Logger.log()
Your usual log in with default white text.
#### Params
|Name|Type|Default|Required|Description|
|--|--|--|--|--|
|msg|string|N/A|o|Your input text|
|color|Color|"White"|x|Color of the text|
### 2. Logger.error()
Your usual log in red text
#### Params
|Name|Type|Default|Required|Description|
|--|--|--|--|--|
|msg|string|N/A|o|Your input text|
### 3. Logger.warn()
Your usual log in with orange text.
#### Params
|Name|Type|Default|Required|Description|
|--|--|--|--|--|
|msg|string|N/A|o|Your input text|
### 4. Logger.succ()
Your usual log in with green text.
#### Params
|Name|Type|Default|Required|Description|
|--|--|--|--|--|
|msg|string|N/A|o|Your input text|

## Return 
void