# React Trivia App

This app is my foray into a react app. Most of my experience has been with Angular, so I
wanted to take the time to build in another modern framework. 

### Goal

My goal was to create a functional app that utilizes libraries and frameworks that would be commonplace 
for professional development. I did set limits on myself, so I don't spend too much time on a 
learning project. Therefore, I'll cover my next steps in the section below.
Below you will find the major components of the app and my thoughts on them.

NOTE: I deliberately skipped error-handling/testing and that was not the focus of this project.

#### Learning react

Ideally the latest version which pushed the functional components heavily. 
So while some things could have been easier with the class approach I wanted it to work
the preferred way. Overall I had a good time building this app.

#### Mobile approach

I've primarily built web apps for desktops so thought this would be a fun exercise.

#### Routing

Any significant app will use this and found it wasn't drastically different from Angular.

#### Design library

My biggest pro for design libraries is consistency so had to pull one of these in. I wanted to
use something other than Bootstrap, ideally mobile inspired. That's how I found [konsta](https://konstaui.com/).

#### Styling paradigm

I've always created custom CSS for specially styled components. (i.e. components different from
the design library) Therefore I was actively looking for something drastically different. 
I found [tailwind](https://tailwindcss.com/) which has a utility-first approach that I feel worked 
very well for rapid prototyping.

#### State management

Had a two pass approach to this. Built the app with only react's `useState`. Which was a bit tedious as
it required passing many references down multiple components. Once complete, I refactored to redux as I typically 
prefer a central state store for any significant app. The concepts I have from NgRx translated nicely as well. 

#### Animations

Unfortunately animations always get a backseat to functionality but I really enjoy animations so I 
pulled in some one D3 animations as some backgrounds. I also looked into `framer-motion` for programatic 
control over animations. This helped with the count down and I'd love to explore this more.

### Next Steps

If I were to continue this project here are some pieces I would flesh out further:

* adfads
* 