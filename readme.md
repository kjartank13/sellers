# WEPO Project 3

This the 3rd hand-in assignment in Web Programming II.
It has the following dependencies:

In this assigment, you should write an Angular application which is written for an online sales business for sellers. I.e. the website has a list of sellers which are selling their products, each individual has a list of products (s)he is selling. The website should be able to manage both the list of individuals, as well as the list of their products.

The website should therefore have the following screens:

    The main screen, which displays a list of all sellers which are selling their products on the site
    The list should display the name of the individual, and the main product category the individual is selling.
    A dialog which allows the user of the website to add new sellers to the list, as well as edit existing sellers.
    A details screen, showing the name of a given seller, a logo or a photo of that individual, plus a set of tabs:
    The first tab should list all the products being sold
    The second tab should list the 10 best selling products
    There should be a dialog/page which allows the user to add/edit products

Note: the design of two of those screens was shown in monday lecture in week 8:

Sellers list: https://dl.dropboxusercontent.com/u/368343/2016-WEPO/V07/sellers.png
Seller details page: https://dl.dropboxusercontent.com/u/368343/2016-WEPO/V07/details.png

The project should be unit tested, code coverage determines the grade for that part.

There may be a REST API you will talk to, or perhaps there will only be a mock API (will be determined shortly).

A starter project is provided (yay!), which contains a set of controls you should use, such as for the following:

    Tables should be sortable by all columns (for instance, by using the table-sort directive which can be found in src/shared)
    All application texts should be translated, and the user should be able to switch between Icelandic and English (using angular-translate). Note that this does not apply to data, only to hardcoded strings inside the app, such as headings, button captions, labels etc.
    When the user adds or edit an entity (individual/product), a toastr notification should be displayed, showing if the operation succeeded or not (a service in src/shared called centrisNotify helps here, since it knows how to display translated strings).
    When the user views a seller which has no products, the user should be informed about this (but not necessarily using a toastr message! Check out uib-alert from ui-bootstrap for this).
    The screens should be responsive, for instance using the bootstrap grid system (this is expecially important in the products tabs!)
    All input should be validated.
    The product display should be a separate directive (or angular 1.5 component!)

The project will be graded as follows:

    (5%) List individuals
    (10%) Add/edit individuals
    (10%) Show details about a given individual
    (10%) All products tab
    (5%) Top 10 products tab
    (10%) Add/edit product
    (5%) All tables sortable
    (5%) All input validated
    (5%) Translated
    (5%) Toastr feedback after add/edit
    (5%) Responsive layout
    (5%) Product directive
    (20%) Unit tests for all code
    (10%) Coolness bonus
