# books: Javascript library - Project Utility Library & API Reference Manual

Welcome to our project documentation profile tracking the utility library functions developed across our 5-member sprint engineering tracks. This project focuses on JavaScript problem-solving, modular algorithms, and native array methods.

---

##  Algorithm Efficiency & Complexity Overview

Because our functions rely entirely on optimized, native JavaScript operations and linear scanning, the code runs with high efficiency across the board.

* **String/Text Manipulations ($O(n)$)**: Functions like `capitalise`, `truncateText`, `reverseString`, and `slugify` iterate over strings character by character, scaling linearly with string length ($n$).
* **Mathematical Operations ($O(1)$)**: Functions like `calculatePercentage`, `clampNumber`, and `isEven` execute direct arithmetic comparisons and formula calculations in constant time, independent of data size.
* **Array operations ($O(n)$)**: Functions like `findMax`, `flattenArray`, and `removeDuplicates` (using a single-pass native `Set` tracking layer) scan through elements in a linear pipeline.
* **Deep Cloning ($O(n)$)**: The `deepClone` function uses structural JSON serialization, which processes every property in the object tree sequentially, executing in linear time relative to total properties.

---

## handshake: Team Contribution Directory

### bust_in_silhouette: Member 1: Core Text Utilities Engineer
* **Files Authored**: `capitalise.js`, `truncateText.js`, `reverseString.js`
* **Core Responsibilities**: Implemented pure text handling logic and edge-case protection against empty string inputs.

### bust_in_silhouette: Member 2: Mathematical Algorithms Specialist
* **Files Authored**: `calculatePercentage.js`, `clampNumber.js`, `isEven.js`
* **Core Responsibilities**: Engineered robust numerical manipulation helpers to handle edge cases like zero-division and strict threshold bounding.

### bust_in_silhouette: Member 3: Data Structures & Array Manager
* **Files Authored**: `removeDuplicates.js`, `findMax.js`, `flattenArray.js`
* **Core Responsibilities**: Developed algorithms manipulating dimensional structures using performance-oriented approaches (such as utilizing the `Set` collection wrapper for $O(n)$ uniqueness tracking).

### bust_in_silhouette: Member 4: Data Validation Architect
* **Files Authored**: `isValidEmail.js`, `isEmptyObject.js`, `isNumeric.js`
* **Core Responsibilities**: Created robust validation layers protecting inputs from broken data structures or incorrect types.

### bust_in_silhouette: Member 5: Documentation & Systems Engineering Lead (Docs Lead)
* **Files Authored**: `formatDate.js`, `slugify.js`, `deepClone.js`
* **Core Responsibilities**: Orchestrated deep reference cloning serialization layers and safe date padding mechanisms while compiling the master API file structure.

---

## book: Complete API Reference Manual

Every function is isolated in its own file and exported as a clean ES module.

### abc: Section 1: Text Transformations (Member 1)

#### 1. capitalise(str)
* **Description**: Capitalises the first letter of a given text string.
* **Parameters**:
  * `str` (string) - The input text string to format.
* **Return Value**: `string` - The string with its first character capitalized, or an empty string if input is falsy.
* **Example**:
```javascript
import { capitalise } from './capitalise.js';
console.log(capitalise('zaio')); // Output: 'Zaio'
