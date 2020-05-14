# BB Design System

A place where everything related to the Bannerboy brand lives with examples [what the heck is a design system anyways?](https://uxdesign.cc/what-the-heck-is-a-design-system-c89a8ea73b0d)

## Getting started

This project is using
[Storybook](https://storybook.js.org/) & React

You'll need to do the following:

1. Clone the repo (duh)
2. Install dependencies by running `yarn install`

## Running development

Once the dependencies are installed, you need to run `yarn start` and once the build finishes runing, it will open a new tab on your browser running the local server on port `6006`

## Project structure

The project was made with the following structure

```
|- src
| |_ components
| |_ foundations
| |_ styles
| |_ utils
```

### src/components

All components that are part of the design system and their dependencies should live here. If you have a react component that wouldn't be part of the design system, it would be better to put it in `src/utils`

### src/foundations

Aspects of the design system that are not components, like colors, typographies etc should live here

### src/styles

Any global styles and scss variables and mixins should live here

### src/utils

Helper functions and helper components should live here

## Creating a component

Each component is made by 3 different elements

```
|-Button
| |_ Button.jsx (where your react component lives)
| |_ button.scss (styles specific to that component)
| |_ Button.stories.jsx (to be explained in the next section )
```

## Adding a story

A story is where the magic happens. According to storybook

> > "Technically, it's a function that returns something that can be rendered to screen."

Each story represents a single visual state of a component.
I'm using storiesOf API, more about it [here](https://storybook.js.org/docs/formats/storiesof-api/)
or you can always refer to my Button example :)

## Using decorators

Let's say I want all of my components to be centered on the screen. Since that is not part of the components behaviour, it should be a separate thing. That's when you use a decorator.
I've included a directory where decorators can be created within the `.storybook` directory (it's call decorators)

They can be used globally or per story
to read more about how they work, refer to the [docs](https://storybook.js.org/docs/basics/writing-stories/#decorators)

## Adding notes, HTML and SCSS code

I've added a storybook addon called addon-info, which allows to show more documentation in a component.
I also created a function to generate the HTML and CSS documentation for stories, which can be added through parameters to every story.

You can see an example below

```js
import React from 'react';
import { storiesOf } from '@storybook/react';
import css from './button.scss';
import getDocs from '../../utils/getDocs';
import Button from './Button';

storiesOf('Components/Button', module)
  .addParameters(getDocs('', <Button>I am a button</Button>, css)) //this is taking care of rendering the HTML & CSS on the "preview info panel"
  .add('default', () => <Button>I am a button</Button>);
```

The `getDocs()` function takes 3 parameters:

Notes: with whatever notes you want to add, or an empty string for nothing
Component: With the React component to be rendered
css: Which is imported in `stories.jsx` files as a string

It is necessary to pass the component to be rendered to the `getDocs` function as well as to the story. The `getDocs` function will compile the react code and transform it to HTML to add it to the documentation.

## Creating markdown stories

I created a helper component to create Markdown stories. You would create the story as normal, and then import your markdown file and pass it as a prop to the `Markdown` component, which lives under utils. You can see an example on the `Welcome` component.
