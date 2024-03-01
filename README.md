# Rest Countries API Application

This application is a user-friendly interface for exploring information about countries using the Rest Countries API. It leverages modern web development technologies and practices to provide a seamless experience for users who wish to learn about different countries' details such as population, region, sub-region, capital, and more.

![RESTcountry Desktop Dark](/public/images/Screenshots/desktop_dark.png)
![RESTcountry Desktop Light](/public/images/Screenshots/desktop_light.png)
![RESTcountry Desktop Light](/public/images/Screenshots/mobile_light_details.png)

## Features

Country List: Display all countries with their flag, name, population, region, and capital.
Search Functionality: Users can search for countries by name to find their specific details quickly.
Filter by Region: Allows filtering countries based on their geographical region (Africa, Americas, Asia, Europe, Oceania).
Country Details: Clicking on a country card opens a detailed view showing more information, such as the native name, top-level domain, currencies, languages, and border countries.
Responsive Design: The application is fully responsive, providing an optimal browsing experience across all devices.
Theme Toggle: Users can switch between light and dark themes for their preference.

### Technologies Used

React: Utilizes React for its UI components, state management, and hooks for reactive data flow.
CSS Modules: Scoped CSS modules for styling components to avoid style leaking and enhance maintainability.
Rest Countries API: Fetches country data from the Rest Countries API (https://restcountries.com).
React Router: Manages navigation within the application, enabling a single-page application experience without full page reloads.
Context API: Uses React's Context API for managing application-wide states like theme (light or dark).

#### React Functionality

useState: Manages component states for handling user input, API responses, and UI states.
useEffect: Fetches countries data from the API on component mount and handles side effects in the application.
useContext: Utilizes the Context API to share global states such as theme across components without prop drilling.
Custom Hooks: Implements custom hooks for encapsulating common functionalities like fetching data from the API.

##### Styling

The application uses a modern and clean design language, with emphasis on readability and ease of use. The styling is achieved using CSS modules, which helps in creating component-specific styles, ensuring that styles do not conflict across the application.

Responsive Layout: The design adapts to different screen sizes using CSS Flexbox and Grid, ensuring a consistent experience across desktop, tablet, and mobile devices.
Theme System: Implements a light and dark theme system that users can toggle, enhancing accessibility and user preference. The themes are applied using CSS variables and dynamically changed via React Context.

###### Running the Application

Clone the repository to your local machine.
Navigate to the project directory and install dependencies using npm install.
Run the application using npm start. This will serve the app on localhost:3000.

###### Contribution

Contributions to the project are welcome. Please fork the repository, make your changes, and submit a pull request for review.
