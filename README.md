# React Trivia App

This is a learning project I'm doing in 10-20 hours to better understand react
and related libraries. It's your standard trivia app taking inspiration from
Netflix's Triviaverse and other games. Check out the video below to see it in action:

`<video here>`

### Goal

My goal was to create a functional app that utilizes libraries and frameworks that would be commonplace 
for professional development. I did set limits on myself, so I don't spend too much time on a 
learning project. Therefore, I'll cover how I'd expand this app in the *Next Steps* section.
Below you will find the major components of the app and my thoughts on them.

NOTE: I deliberately skipped error-handling/testing as that was not the focus of this project.

#### Learning react

The latest version of react is pushing the functional components heavily so I focused
on keeping all my components in that style. The only issue I ran into here is the
stale closures and how to properly reference changing state. Overall this wasn't
a huge change from the concepts in Angular so easy enough to pick up.

#### Mobile approach

I've primarily built web apps for desktops so thought this would be a fun exercise.

#### Routing

Any significant app will use this and found it wasn't drastically different from Angular.

#### Design library

My biggest pro for design libraries is consistency so had to pull one of these in. I wanted to
use something other than Bootstrap or Material, ideally mobile inspired. That's how I found [konsta](https://konstaui.com/).

#### Styling paradigm

I've always created custom CSS for specially styled components. (i.e. components different from
the design library) Therefore I was actively looking for something drastically different. 
I found [tailwind](https://tailwindcss.com/) which has a utility-first approach that I feel worked 
very well for rapid prototyping.

#### State management

I took a two pass approach to this. I built the app with only react's `useState`. Which was a bit tedious as
it required passing many references down multiple components. Once complete, I refactored to use redux as I typically 
prefer a central state store for any significant app. The concepts I have from NgRx translated nicely as well. 

#### Animations

Unfortunately animations always get a backseat to functionality but I really enjoy animations so I 
pulled in some D3 animations as some backgrounds. I also looked into [framer-motion](https://www.framer.com/motion/) for programatic 
control over animations. This helped with the count down and I'd love to explore this more.

### Next Steps

If I were to continue this project here are some pieces I would flesh out further:

* Error handling.
* Unit test every component. Then look into a few E2E tests with mocked API.
* Animate everything. As a trivia app/game animations really draw the user in. I would enjoy using the `framer-motion`
  library some more. It reminds me of the angular animations library.
* More features like the following would be great:
  * High score tracking via local storage
  * Multiplayer via WebRTC
  * True responsiveness
  * PWA, perhaps the app can cache many questions per game and reference them offline.