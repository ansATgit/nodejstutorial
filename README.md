Goal
=====

* Based on user selection, dynamically load different layout and js

Instructions
========

* Use  [JQuery getscript](https://api.jquery.com/jquery.getscript/) to dynamically load JS
* Look at manually configured layouts and write dynamically loadable JS modules
  * These modules should have following APIs
    * Load Data
    * Render Data
    * Load Controls
    * Render Controls
    * Submit Data
* In home page, user has option to choose a layout, which on selection 
  * Loads the appropriate JS
  * Instantiate necessary JS module objects
  * Loads controls and renders controls
  * Controls after render should provide a clickable "Load Data", which on click load and render data
  * Controls after render should provide a clickable "Submit Data", which submits user entered data
* Data, control configuration and user submitted data should be stored in DB
  * Use the provided sqlite file for local DB read and write
