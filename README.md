# Rakuten Frontend Challenge


---

## Answers to technical quiz questions

### 1. What is the output of this code?
```
const main = function () {
  console.log("A");
  setTimeout(function () {
    console.log("B");
  }, 1000);
  console.log("C");
};
main();
```
Select one answer
1.	A B C
2.	B A C
3.	A C
4.	A C B

Answer: 4 – A C B

Explanation:
console.log("A") runs immediately

setTimeout(...) is asynchronous and is scheduled for later

console.log("C") runs before the timeout finishes

After ~1000ms, "B" is logged


### 2. What is the output of this React code?
```
import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(10);

  useEffect(
    function () {
      setCount(count * 0.5);
    },
    []
  );
  return <div>Your counter is: {count}</div>;
}
```
 Select one answer

1.	Your counter is: 0
2.	Your counter is: 10
3.	Your counter is: 5
4.	Your counter is: 20

Answer: 4 - Your counter is: 5

Explanation:

useState(10) initializes count to 10

useEffect runs once after the first render because of the empty dependency array []

It sets the count to 10 * 0.5 = 5

React then re-renders with count = 5

#############################

This project is a React + TypeScript implementation of a simplified **Rakuten product card interface**, based on the provided technical test instructions.  
It follows Rakuten's design style and is responsive and component-driven using Material UI (MUI).

---

## Live Demo

[View deployed project on Vercel](https://rakuten-frontend.vercel.app/)  

---

## Tech Stack

- React 18
- TypeScript
- Vite
- Material UI (MUI)
- Vitest + React Testing Library (for unit testing)

---

## Features

- Fully typed and reusable `ProductCard` component
- Responsive design for desktop and mobile
- Hover effects on cards and images
- Conditional display of "New" and "Used" prices
- External Rakuten links (open in a new tab)
- Defensive rendering if data is missing (title, brand, image, href)
- Unit tests to validate component behavior

---

## Testing

The project uses **Vitest** and **Testing Library** to ensure:
- Correct rendering with complete data
- Conditional display when `usedPrice` is missing
- No rendering if essential fields are missing

To run tests locally:

```bash

npx vitest
```
## How to Run Locally
Clone the repository and install dependencies:

```bash

git clone git@github.com:hugosoa/rakuten-frontend.git
cd rakuten-frontend
npm install
npm run dev
```
