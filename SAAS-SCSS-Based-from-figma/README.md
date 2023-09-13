Below, you'll find information on how to access the project's interactive prototype, design specifications, and details about the development environment.

Interactive Prototype
You can view the interactive prototype of this project by following this link: Interactive Prototype

Design Specs
For detailed design specifications, visit: Design Specs

Development Environment
This project was built using various tools and technologies, including:

SCSS: We used SCSS for styling the project.
GULP: Gulp was used to automate tasks like compiling SCSS, minifying CSS and JavaScript, optimizing images, and more.
JavaScript: JavaScript was used for adding interactivity to the project.
Gulp Tasks
We have defined several Gulp tasks to streamline the development workflow:

compilescss: Compiles SCSS files, adds vendor prefixes, and minifies CSS files.
jsmin: Minifies JavaScript files.
optimizeimg: Optimizes images using MozJPEG and OptiPNG.
webpImage: Creates WebP versions of images.
copyFonts: Copies fonts from the source to the distribution folder.
watchTask: Watches for changes in SCSS, JavaScript, images, and fonts and runs the corresponding tasks automatically.
To run these tasks, you can use the following command:

bash
Copy code
npm install gulp -g
npm install
gulp
JavaScript Functions
We've included JavaScript functions for interactive features:

setupHoverEffects: Adds hover effects to specific elements when the mouse is over them.
openPopupButtons: Opens a popup when specific buttons are clicked.
closePopupBtn: Closes the popup when a close button is clicked.
These functions are executed when the page is fully loaded.

Feel free to explore the code and assets to get a better understanding of the project's structure and functionality.

For any questions or issues, please don't hesitate to reach out to the project team.





