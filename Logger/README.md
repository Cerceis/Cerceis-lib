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
### 1. Logger.log(): void
Your usual log in with default white text.
#### Params
|Name|Type|Default|Required|Description|
|--|--|--|--|--|
|msg|string|N/A|o|Your input text|
|color|Color|"White"|x|Color of the text|
### 2. Logger.error(): void
Your usual log in red text
#### Params
|Name|Type|Default|Required|Description|
|--|--|--|--|--|
|msg|string|N/A|o|Your input text|
### 3. Logger.warn(): void
Your usual log in with orange text.
#### Params
|Name|Type|Default|Required|Description|
|--|--|--|--|--|
|msg|string|N/A|o|Your input text|
### 4. Logger.succ(): void
Your usual log in with green text.
#### Params
|Name|Type|Default|Required|Description|
|--|--|--|--|--|
|msg|string|N/A|o|Your input text|
