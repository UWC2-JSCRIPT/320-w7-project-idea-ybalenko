## Be inspired by the MET collections

Art is my passion and oil painting is my hobby, however from time to time I am struggling to find my inspiration. This winter I was into still life and now I fancy to paint spring flowers like tulips and irises. What will be next?

Google and Pinterest make it sometimes much harder to find a good artwork example to get some ideas from. So I came up to create an artwork discovery website to be able to view art collections and filter out great examples from all over the world. 

For this UI, I'll be calling [the Metropolitan Museum of Art Collection API](https://github.com/metmuseum/openaccess) that represents thousands of artworks in The Metropolitan Museum of Art collection. How my app will be different from [the MET website](https://www.metmuseum.org/art/the-collection)? Their filtering and searching are quite complicated, my goal is simplify and display the results I am interested in. 

My app will have several views:
* The home page, for displaying list of artwork mediums such as oil paints, watercolors, drawings, photogrsphy and sculptures.
* Each medium contains a link that leads you a view with art highlights and several search components to narrow down the results.
* If filter options are specified correctly, a click on a search button will open a view with the results.
* Below each image a user will be able to find the details:
    * Title
    * Artist name
    * Period
    * Country
* If a search returns no data, a user-friendly message should be displayed. Offer suggestions based on the search parameters (**TBD**)?

## Technical details

In my project I am planning to use:
* Styles with CSS, also I will be using Bootstrap.
* The appropriate loops/conditionals to map and display components.
* PropTypes to define props for each component, if any.
* React Router to switch between views.
* Route params to pass the art ID to the art detail page.
* Fetch to retrieve the art details.
* Paging for the art list (if supported by the API) (**TBD**).
* Ability to "favorite" an artwork and store favorite artwork using the browser's localStorage API or Firebase (**TBD**).
* Tests for each page (**TBD**).


A list of tasks that need to be completed for the project:

Home page:
    * Setup `create-react-app` scaffold
    * Call the API and print artworks medium options

Highlights and filters:
    * Call the API for highlights and print them
    * Store API results in React component state
    * Render React state
    * Display filter options and 'Search' button 
    * Display link to Home

Search results if a user defined filteres and clicked a search button:
    * Call the API for the results and print them
    * Store API results in React component state
    * Render React state
    * Display links to Home and to Highlights
