# Pokemon TCG Explorer


## Description 

This project shows a website, which, upon loading, shows a Home Page with Navigation Bar on top, after which comes a gridpane of Pokemon TCG - cards. Then clicking on the card, a different screen pops up, which shows details about the chosen card. After the card description there is a "Back to Home"- button, which takes you back to Home Page. Then clicking on "How to Play" - link on Navigation Bar, it opens a screen with embedded YouTube - video about how to play Pokemon TCG.

## Key features

- Project contains three screens: "Home Page", "Card Info" and "How to Play".
- Home Page shows a scrollable gridpane of Pokemon cards.
- Upon clicking the card, a "Card" - screen opens up with details about the chosen card.
- Navigation bar contains links to "Home"- and "How to Play" - screens.
- Navigation bars "How to Play" - link opens up a page with embedded YouTube - video, which shows the rules of Pokemon TCG.

## Getting Started

### Requirements
- Node.js (v 18+) (https://nodejs.org/)
- npm
- React (built with Vite)
- React Router (HashRouter)
- Bootstrap/React-Bootstrap
- react-social-media-embed
- TCGdex API (free public API)

### API
- https://api.tcgdex.net./v2/en/sets/base1 (list of cards)
- https://api.tcgdex.net./v2/en/sets/base1/{id} (details of a single card)

## Installation and Running Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/pokemon-tcg-explorer.git
    cd pokemon-tcg-explorer
    ```

2. Install dependencies:
    ```bash
    npm install react-router-dom
    npm install bootstrap
    npm install react-bootstrap
    npm install react-infinite-scroll-component
    npm install react-social-media-embed
    ```

3. Start development server:
    ```bash
    npm run dev
    ```

3. Open the address printed in terminal:
    ```bash
    https://localhost:5173/pokemon-tcg-explorer/
    ```

## Credits
- Card data and images: https://tcgdex.dev/
- Pokemon and its card artwork belong to their respective owners. This project is for educational purposes only.