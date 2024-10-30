import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #ff8c69;
    --secondary-color: #ff7f50;
    --background-color: #f5f5f5;
    --text-color: #333;
    --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.5;
  }

  h1, h2, h3 {
    margin: 0;
    line-height: 1.25;
  }
`;
