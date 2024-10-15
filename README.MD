# Movie Character Explorer

Welcome to the **Movie Character Explorer**! This is a Single Page Application (SPA) built using **HTML**, **CSS**, and **JavaScript** that allows users to explore and search for movie characters through a public API. The app provides a user-friendly interface to search for characters, display detailed information, and interact with the data in various ways. Users can dive into the world of cinema by discovering new characters, reading trivia, and saving their favorites for easy access.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Information](#api-information)
- [Project Requirements](#project-requirements)
- [Stretch Goals](#stretch-goals)
- [User Stories](#user-stories)
- [Contributing](#contributing)
- [License](#license)

## Introduction
Welcome to JavaScript Project Mode! This project integrates everything learned up to this point into a fully functional SPA that fetches data asynchronously from a public API. It allows users to search for and interact with a collection of movie characters without any page reloads.

## Features
- **Search Characters:** Users can search for movie characters using a search bar.
- **View Details:** Detailed information about each character is displayed, including name, their biography, movies they appear in, and the actors who play them..
- **Interactive UI:** A dynamic and interactive user interface with various events like click, input, and form submission.
- **Asynchronous Data Fetching:** Fetches character data from a public API and displays it seamlessly.
- **Responsive Design:** The app is fully responsive, ensuring a great user experience on both desktop and mobile devices.

## Getting Started

### Prerequisites
- **Git**: Make sure Git is installed on your computer to clone the repository.
- **Web Browser**: A modern web browser like Chrome, Firefox, or Edge.
- **Internet Connection**: Required to fetch data from the public API.

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/movie-character-explorer.git
   ```
2. **Navigate into the project directory:**
   ```bash
   cd movie-character-explorer
   ```
3. **Open `index.html`** in your preferred web browser:
   ```bash
   open index.html
   ```
   Or, if you use Visual Studio Code, you can run:
   ```bash
   code .
   ```

## Usage
- **Search for Characters:** Type a character's name into the search bar and click the "Search" button.
- **View Details:** Click on a character card to view more details like their description and the movies they appear in.
- **Filter & Sort:** Use additional filters or sorting options to refine the displayed characters.

## API Information
This app interacts with a public API to fetch character data. The data includes at least 5 character objects, each with at least 3 attributes such as `name`, `movie`, `description`, and more.

- **Endpoint Example:** `https://api.example.com/characters`
- **Attributes**: Each character object includes:
  - `id`: Unique identifier
  - `name`: Name of the character
  - `movie`: Movie the character is associated with
  - `description`: Brief description of the character
  - `image`: URL to the character's image

## Project Requirements
- The app is built with **HTML**, **CSS**, and **JavaScript**.
- Uses a **public API** that returns a collection of at least **5 objects**, each with **3 attributes** or more.
- The client-server interactions are handled **asynchronously** using **fetch**.
- **No page reloads**: All data interactions happen dynamically without page refresh.
- Implements **3 distinct event listeners**:
  - `click` event for the search button.
  - `input` event for real-time search suggestions.
  - `form` submission event for handling search queries.
- Uses **array iteration** methods like `map`, `forEach`, and `filter` to handle and manipulate data.

## Stretch Goals
- **JSON Server Integration**: Set up a local `db.json` file and use `json-server` for data persistence and simulating a local API.
- **Enhanced UI Interactions**: Add functionalities like favoriting characters or upvoting comments.
- **Dark/Light Mode Toggle**: Add a button to switch between dark and light mode.

## User Stories
1. **As a user**, I want to **search for my favorite movie characters** so that **I can quickly find their information**.
2. **As a user**, I want to **view detailed information** about a character so that **I can learn more about them**.
3. **As a user**, I want to **filter the results** based on the movie title so that **I can find characters from a specific movie**.
4. **As a user**, I want to **interact with the displayed characters** by liking or bookmarking them so that **I can keep track of my favorites**.

## Contributing
Contributions are welcome! If you have suggestions or improvements, please follow these steps:
1. **Fork** the repository.
2. **Create a new branch** (`feature/your-feature`).
3. **Commit your changes**.
4. **Push to the branch**.
5. Open a **Pull Request**.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
