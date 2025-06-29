## Rendering Patterns

[1]. No Pre-rendering -> ( Simple React Application ) 

- the server sends HTML file to Browser
- Browser receives with HTML ( nothing to display )
    <div id="root">
        // content will be loaded here after hydration
    </div>
- After client is hydrated with JS, our React code runs and then it fills that empty space with components

- Hydration : App becomes interactive

1. Blank Screen -> JS in now downloaded -> 2. Visible Content

[2]. with Pre-rendering -> ( Next JS Application )

- the server sends a HTML file to Browser
- Browser receives a complete HTML file to display on screen
- After client is hydrated with js, our app becomes interactive

- initial Load ( Visible content ) -> JS is now downloaded -> 3. Visible Content