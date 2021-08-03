# Angular Notes (August 2, 2021)
---

### Topics
- Angular Overview
    - Overview
    - Single Page Application (SPA) Architecture
    - Webpack
- Angular CLI / Setup
- Useful Commands
- Demo
---

## What is Angular?
- Angular is an open-sourse TypeScript/JavaScript based front-end framework
- The version we will be working with is called Angular 2
    - Angular 2 is TypeScript based whereas Angular JS is based on JavaScript
    Additions:
        TypeScript features:
            - OOP concept,s includes classes, interfaces, abstraction, etc.
        - Angular JS was not built not built with mobile in mind, whereas Angular 2 is mobile oriented
    - Architectural change from MVC to a Component/Directive Design 
        - A component is a grouping of files that is comprised of html, ts, and css that represents a section/view of the application

## Single Page Application (SPA) Architecture 

- The name is deceiving, a SPA literally has one page 
- [SPA example](https://angular-university.io)
- The page does not fully reload - only new data gets sent as the user navigates the application

- **Advantages**
    - Fast and responsive (only updates that required components instead of the entire page)
    - mobile friendly 
    - caching possibilites, since everything is retrieved at once and saved to your device, you are still able to navigate the page and local data will synchronize once connection is restored

- **Disadvantages**
    - Doesn't perform with SEO (search engine optimization)
        - until relatively recently, search engines had a hard time correctly indexing SPAs. 
    - The way Angular actually fills in the content is by using JavaScript defined at the bottom
---
### Webpack
### The Problem
- Loading multiple script tags in HTML is inefficient, since each script must be loaded sequentially.
---
- A popular static module bundler for JS applications, a tool for bundling application source code in convenient chunks which can then be loaded from a server into a browser.
- Anguar automatically does Webpack bundling so we dont have to.

## Demo

Component
    : A logical piece of code for an Angular application. Consists of a template (html), class (similiar to any class declaration in C# contains methods and properties). Has the code that supports the view. 
Module
    : Used to put logical boundaries in your application. Allows you to containerize your code into seperate modules to sperate functionality in your application. 


## Useful Commands
 - Install angular cli: `npm install -g @angular/cli`
 - Confirm Installation: `ng version`
 - Create an application: `ng new [project-name]`
 - Run the application: `ng serve` or using npm `npm start`
 - Scaffold a component: `ng component [component-name]` AND `ng g c [component-name]`


 ## Directives 
    
    - A custom HTML element that is used to extend the power of HTML.
    - We will use the BrowserModule to show ngFor

    - Attribute Directive
        - changes the appeance of a DOM element
    - Structural Directive
        - change the DOM layout by adding and removing DOM elements 