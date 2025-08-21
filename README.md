Create multi-screen React Native application using React Navigation.
The app should start with a login screen, navigate to a welcome screen 
and allow a shared click count to be accessed and modified across multiple screens.

Implementation Instructions


1. Project Setup

-  Create a folder called screens to hold screen components.

-   App.js should be used to define navigation stack and manage shared state.



2. Login screen with navigation to WelcomeView

- Create screen component called Login and make it the initial screen of your app.

  - Add two text input fields for username and password.

  - Add a Login button.

  - When Login button is pressed:
    -  Save the username for later use.
    -  Navigate to the WelcomeView screen.
    -  Prevent returning to the login screen using the back button.


3. Welcome Screen (WelcomeView)

-  Create a screen called WelcomeView.
  
  -  Display the text "Welcome <username>" in a large font, which is easy to read.

  -  Also display the current click count.
  
  - Add buttons to navigate to ButtonIncrementView, ButtonDecrementView, and SummaryView.


4. Click Counter Across Screens
   
- Create screens called ButtonIncrementView, ButtonDecrementView, and SummaryView.

- All of these screens should display the current click count.

- The click count must be shared across all screens, for example updating it in one screen reflects in all others.

- All views should have back button to get back to WelcomeView

-  In ButtonIncrementView: 
  - Add a button that increments the click count when pressed.
  
-  In ButtonDecrementView:
  - Add a button that decrements the click count when pressed.

-  In SummaryView:
  - Display the current value of the click count.

Add TestIDs for testing:

Login:
  -  text-input for Username text input field
  -  password-input for Password input field
  -  button for Login - button


Requirements 

· Login screen is the initial view, and leads to WelcomeView without back navigation.

· Username is passed from Login and used in FirstView.

· ButtonIncrementView includes a button that increments a shared click counter.

· All four main screens (WelcomeView, ButtonIncrementView, ButtonDecrementView, SummaryView) display the current value of the click counter.
