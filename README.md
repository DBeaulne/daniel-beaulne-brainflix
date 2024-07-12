# daniel-beaulne-brainflix

- initial repo set-up on main
- initial react app creation
- created required file structure
- pushed to main
- created develop branch
- created ReactReadme.md for react specific documentation
- updated README.md for git repo and project related documentation
- pushed to develop branch
- npm install -g sass, pushed to develop branch
- create \_global.scss partial and update to match style guide, pushed to develop branch
- create and switch to branch feature-create-header
- begin working on the page header. Create header components for the logo, search bar, avatar and upload button
- finalize coding and styling header components - logo, search bar w/avatar, and button w/avatar <<<<<<< HEAD =======
- correct avatar img getting squished by sibling
  > > > > > > > feature-create-header
- addition of VideoPlayer component
- renamed CurrentVideo component to MainVideo to adhere closer to implementation requirements
- recreation of Avatar component and utilized in new CommentForm component
- refinement of styling
- create VideoStats component for use in the MainVideo, styling as required.
- complete CommentForm coding and styling.
- refine Header layout and component call.
- Clean up SearchBar and Button components, removed Avatar inclusion in these components to keep separation of concerns
- create MainVideo comment component to loop through comments prop and display accordingly.
  > > > > feature-next-videos
- create NextVideos component to loop through, and display, the array of next videos
- complete functional programming of NextVideo component
- complete integration of state and the logic to change which video is displayed in the MainVideo component
- > > > feature-styling
- begin styling the app for tablet breakpoints
- component styling for breakpoints. SearchBar, vidoePlayer, title, VideoStats, VideoBlurb and CommentForm complete
- complete all component styling across all breakpoints
- final commit before merging to main
  > > >

## Sprint 2 start

- install react-router-dom, axios, and sass as required
- correct VideoStats.js code warning for img tag not having alt attribute
- correct feedback noted from Sprint 1
- test and implement api routes
- code and debug useEffects for mount, videoDetails, and id changes
- code and style upload page
- debug next video selection
- implement sprint 1 deep dive for date conversion
- final commit before submission
  > > >

## Sprint 3 start

- implement code that was missed in Sprint 2
- implement modal window for upload notification and re-direct to home page
- implement code to clear out upload form field on cancel
- split converDate function from VideoComment and placed it in a new src/utils directory

### feature/custom-api branch

- edited code to implement the local api requirements of the sprint
- integrated functionality for static file retrieval for poster images
- debug code for posting videos
- completed basic requirements of the sprint

### feature/deepdive-post-comments
