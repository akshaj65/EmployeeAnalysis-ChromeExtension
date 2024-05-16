# EmployeeAnalysis-ChromeExtension

This Chrome extension simplifies employee search by leveraging a local backend to query text selections. It provides  employee profiles and charts for singular matches, and displays lists for multiple matches.

https://github.com/akshaj65/EmployeeAnalysis-ChromeExtension/assets/57281244/15c4efa8-dfcb-4393-803b-a532a61d1f77

## Table of Contents

- [Key Features](#key-features)
- [Approach and Flow](#approach-and-flow)
- [Prerequisites](#prerequisites)
- [Installation](#installation)

## Key Features
    
  - Utilizes a local backend for efficient text search operations.
  - Offers streamlined access to employee details and visualizations.
  - Rapid response to search requests, enhancing user productivity.
  - Intuitive user interface ensures smooth navigation and interaction.


## Approach and Flow

1. **Repository Setup**:
    - Create a new GitHub repository for your Chrome extension.
    - Initialize the repository with a README.md file to provide an overview of the project.

2. **Project Structure**:
    - Define the project structure. For example:
        ```
        /backend
        /chrome-extension
            /src
              /assets
              /containers
              /pages
                /background
                /content
                /popup
            manifest.json
            README.md
        /data
        ```

3. **Manifest File**:
    - Create a `manifest.json` file to configure the Chrome extension.
    - Define permissions, background scripts, content scripts, popup pages, etc., as required.

4. **Background Script**:
    - Implement the background script to handle text selection events and communicate with the backend.
    - Set up message passing between the background script and other components.

5. **Content Script**:
    - Develop the content script responsible for extracting selected text and sending it to the background script.
    -Added an EventListener that checks if a double-click event occurs on a webpage, and then injects the panel with selected text using ReactDOM
6. **Popup Page**:
    -Added a button that, when clicked, creates a panel to the right.
7. **Backend Setup**:
    - Set up a local backend  using Node.js to handle employee search queries.
    - Implement APIs or routes to receive search queries and return employee data .
    - This also includes chart needed API'.

8. **Employee Profiles and Charts**:
    - Design the employee profile format and determine what information to display (e.g., firstName, age, experience,salary, etc.).
    - Selected appropriate chart libraries (e.g., react-) for visualizing employee data.
    - Develop components to generate and display charts based on employee data.

9. **Multiple Matches Handling**:
    - Determine how to handle scenarios where there are multiple matches for a search query.
    - Design and implement a UI to display lists of multiple matches, allowing users to select the desired employee.



## Prerequisites

- Node.js - Ensure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/en/download/).
- MongoDB - Install MongoDB and ensure it's running on your machine. You can download it from [here](https://www.mongodb.com/try/download/community).

## Installation

1. **Clone the Repository**

```
   git clone https://github.dev/akshaj65/EmployeeAnalysis-ChromeExtension.git
```

2. **Backend Installation**

    Please see the [Backend README.md](./backend/README.md).

2. **Client Installation**

    Please see the [Client README.md](./chrome-extension-react/README.md).

