# OnlineCV
A fully responsive Online CV Template produced using front-end technologies: CSS3, Sass, HTML5, Jquery, Bootstrap. Compatible and tested with most modern browsers.

# Installation
To make use of this template you will need to download the project and run from index.html in a web browser of your choice.
Most external libraries are fetched from CDN, however there are still a few without support, therefore the page must be nested with the project directory. 

## Clone

```
git clone https://github.com/Dupeydoo/OnlineCV.git

```

# Requirements
To run the project one will need Sass. It can be installed by first downloading Ruby for the respective Operating System from [here](https://www.ruby-lang.org/en/downloads/) and then running `gem install sass`. Once sass is installed run the command:

```
sass --watch styles.scss:sass-styles.css

```

This is the default filenames. Please bear in mind the other scss stylesheets by default are imported into the main stylesheet. With sass there's no need for an additional HTTP request with each import.
