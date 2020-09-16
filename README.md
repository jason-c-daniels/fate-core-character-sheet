# Fate Worksheet Template

## About
This is a small Svelte 3 application intended to facilitate creating worksheets for Fate and derived products. 
It has a couple of items hooked up to speed up project creation.

## Using this template
1. As a github template project  you can just click the "Use This Template" button.
2. Run `npx degit jason-c-daniels/fate-worksheet-template your-project-name`
3. Download a zip of the master branch from github.
4. In the project folder run `npm install` to install the dependencies.

## Where to go from here
You'll need to modify `package.json` and `applicationSettings.js` with the actual name of your application.
as well as the type of worksheet name.  From there decide what the structure of your data will be,
and modify `src/model/worksheet.js`. After that begin laying out your UI and binding controls to the data
structure you defined in worksheet.js.

NOTE: Be sure to give your app a unique prefix that the worksheet will be stored under.
For example if you've made a Fate Core Scenario Creation Worksheet, you might choose the prefix of
"fate-core-scenario-" for the prefix. 

## Misc. Notes
MWC doesn't inherit styling/theming from MDC when 
used in your application. It overrides what MDC has by setting custom properties. 
The only way to apply a theme is to change the custom properties.

An example of this exists in `global-properties.css`.

Also, this means that sass is not needed to theme applications made with this 
template.
