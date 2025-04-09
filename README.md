# @alejofl/password-utilities

![NPM Version](https://img.shields.io/npm/v/@alejofl/password-utilities)

> Small, useful JavaScript library that provides password utility functions.

## Table of Contents
- [Installation](#installation)
- [Examples of Usage](#examples-of-usage)
- [Contribution](#contribution)
- [Security](#security)
- [License](#license)

## Installation

Install via npm:

```bash
npm install @alejofl/password-utilities
```

Install via yarn:

```bash
yarn add @alejofl/password-utilities
```

Install via pnpm:

```bash
pnpm add @alejofl/password-utilities
```

## Examples of Usage

Generate a strong password with a length of 12 characters:

```js
import { generateStrongPassword } from '@alejofl/password-utilities';

const password = generateStrongPassword();
console.log(`Generated password: ${password}`); // Generated password: <12-character-password>
```

Check if a password is strong (i.e. contains at least one uppercase letter, one lowercase letter, one digit, and one special character):

```js
import { isStrongPassword } from '@alejofl/password-utilities';

const isStrong = isStrongPassword('pC%mD8TpCKn2');
console.log(`Is the password strong? ${isStrong}`); // Is the password strong? true
```

## Contribution

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Security

Please refer to our [SECURITY.md](./SECURITY.md) for information about our security policies, how to report vulnerabilities, and our approach to handling security concerns.

## License

This project is licensed under the [MIT License](./LICENSE.txt).

## Final Remarks

This project was done in an academic environment, as part of the curriculum of **Continuous Integration from University of Applied Sciences Technikum Wien (UASTW)**. The project was carried out by Alejo Flores Lucey and Amelia Maier.