<h1 align="center">Exchange UI</h1>

![NPM](https://img.shields.io/npm/l/exchange-ui)
![npm](https://img.shields.io/npm/v/exchange-ui)
![npm](https://img.shields.io/npm/dt/exchange-ui)

**UI library for crypto exchanges.**

Introducing our exquisite and sophisticated UI library tailored specifically for discerning crypto exchanges.

Immerse yourself in a world of luxury and elegance as our meticulously crafted design elements seamlessly integrate with the cutting-edge technology of the cryptocurrency industry.

Elevate your user experience to new heights with our high-end interface components, meticulously curated to ensure a seamless and visually stunning trading environment.

With our UI library, you can confidently offer your users a truly elevated and refined trading experience, solidifying your position as a premier destination for secure and stylish cryptocurrency transactions.

## Installation

**NPM**

```bash
npm install exchange-ui
```

**Yarn**

```bash
yarn add exchange-ui
```

## Usage

```jsx
import "src/styles/globals.css";
import { ExchangeUiProvider } from "exchange-ui";
import { Button } from "exchange-ui";

<ExchangeUiProvider value={{ theme: "light" }}>
  <Component {...pageProps}></Component>
</ExchangeUiProvider>;
```

```css
/** global.css */
@import "exchange-ui/exchange.css";
@import "./tailwind.css";

/** tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Components

- [x] Button
- [x] Checkbox
- [x] Input
- [x] Select
- [x] Textarea
- [x] Tooltip
- [x] Modal
- [x] Dropdown
- [x] Tabs
- [x] Table
- [x] Pagination
- [x] Loader
- [x] Alert
- [x] Badge
- [x] Card
- [x] Divider
- [x] Silder
- [x] List
- [x] Tag
- [x] Typography
- [x] Avatar
- [x] Icon
- [x] Menu

## Stack we use

![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![tailwindcss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

![figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
