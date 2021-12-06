@Description
- This is the global validation schema. if there's application specified validation needed. Extend this class instead of adding into it.

@Usage
- import { Validator } from <path to validator.ts>
- const validator = new Validator()
- validator.value ```(<input value>).<chain()>.<chain()>....valid()```
- validator.errors to check if has errors

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