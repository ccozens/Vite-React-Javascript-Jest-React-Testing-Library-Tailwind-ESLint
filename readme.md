Template report for Vite, React, Javascript, Jest, RTL, Tailwind, ESLint.

The following were used in varying degrees making this:  
[React + TailwindCSS + Vite.js = a Match made in Heaven?](https://dev.to/rjzauner/react-tailwindcss-vite-js-a-match-made-in-heaven-14o5)  
[Quick Jest Setup With ViteJS, React, & TypeScript](https://codingwithmanny.medium.com/quick-jest-setup-with-vitejs-react-typescript-82f325e4323f)  
[reactjs-vite-tailwindcss-boilerplate github repo](https://github.com/joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate)

The main difference here is Javascript, rather than Typescript.

After installs
`npm run dev` shows:

![preview](./preview.png)


And after `git init`, running `npm test` resuts:


 ```javascript
 PASS  src/__tests__/App.test.js
  ✓ Vite should be in the doc (34 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |   66.66 |      100 |     100 |   66.66 |                   
 App.jsx  |     100 |      100 |     100 |     100 |                   
 main.jsx |       0 |      100 |     100 |       0 | 6                 
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.298 s
Ran all test suites related to changed files.


 ```

### Copy with [degit](https://github.com/Rich-Harris/degit):  

```npm i -g degit```
```degit/ccozens/Vite-React-Javascript-Jest-React-Testing-Library-Tailwind-ESLint
```

Please let me know if anything doesn't work!

