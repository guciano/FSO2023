# Excercise: Part0.6
## New note in Single page app diagram
```mermaid
    sequenceDiagram
    participant browser
    participant server

    
    Note over browser: Client sends GET request to server
    alt
    Note right of browser :The browser renders the HTML page and content

    browser->>server: Send HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: Send the HTML page to be rendered by the browser
    deactivate server

    browser->>server: Send GET request https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: The main.css
    deactivate server

    browser->>server: Send GET request https://studies.cs.helsinki.fi/favicon.ico
    activate server
    server-->>browser: favicon.ico
    deactivate server

    browser->>server: Send HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    browser->>server: Send HTTP GET request https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server
    Note right of browser: The browser executes the callback function that renders the notes
    end

    browser->>browser: User post a new note
    browser->>server: HTTP POST request https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Response 201 {content: "new post", date: "2023-04-28T09:57:48.648Z"}
    Note over browser: The browser executes the callback function that renders the notes
```