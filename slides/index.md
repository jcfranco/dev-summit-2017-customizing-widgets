<!-- .slide: data-background="../reveal.js/img/title.png" class="center" -->

# Customizing the ArcGIS API for JavaScript Widgets

### Alan Sangma – [@alansangma](https://twitter.com/alansangma)
### Matt Driscoll – [@driskull](https://twitter.com/driskull)
### JC Franco – [@arfncode](https://twitter.com/arfncode)

<img src="images/flag.gif" width="350" style="border:0; background:none; box-shadow:none;">

---

# Agenda

- About Customizing Widgets
- Prerequisites
- ViewModels
- Views
- Theming
- Tips & Tricks
- Q & A

<img src="images/agenda.gif" width="250">

---

# About Customizing Widgets

 What do we mean by customizing?

- Extending an existing widgets view or viewModel
- Recreating a view with or without our widget framework
- Creating a theme for widgets
- Theming a widget

<img src="images/catpirate.gif" width="350">

---

# Session Prerequisites

- Accessor
- Basic knowledge of esri Widgets
  - (Plug) Session tomorrow on building widgets using our framework (esri/Widget)

<img src="images/prereqs.gif" width="350">

---

## `esri/core/Accessor`

- API foundation
- Why?
 - Getters + Setters
 - Watching for changes
 - Unified object constructor
 - Computed properties, autocasting and more

---

## Accessor - Watch for changes

```javascript
// watch for changes using a property chain
view.watch("map.basemap.title", function(newValue, oldValue, property, target) {
  console.log(newValue, oldValue, property, target);
});

// watch for changes to multiple properties
view.watch('stationary, interacting', function(value) {
  console.log(value);
});
```

---

## Accessor - Unified Object Constructor

```js
var map = new Map({
  basemap: new Basemap({
    baseLayers: new Collection([
      new ArcGISTiledLayer(url)
    ])
  })
});
```

---

## Want more Accessor details?

[Building Classes Using Accessor and the ArcGIS API for JavaScript](https://devsummitps17.schedule.esri.com/session-catalog/234004588)

---

# Esri Widgets

`esri/widgets/Widget`: Our new widget framework

- Custom widget base
- Built with TypeScript

<img src="images/new-widgets.gif" width="350">

---

# Lifecycle

- `constructor`
- `postInitialize`
- `render`
- `destroy`

<img src="images/catpirate2.gif" width="350">

---

# `render()`

- Unified entry point for all UI logic
- Driven by widget's state
- JSX used to render our UI

```js
render() {
  return <div>Hello world!</div>;
}
```

---

# Esri Widget Prerequisites

Prerequisites for `esri/widgets/Widget`

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [TypeScript](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/index.html)
- [ArcGIS typings](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/index.html)
- [Dojo typings](https://github.com/dojo/typings/wiki/How-To-Use)

<img src="images/node.png" width="200" style="border:0; background:none; box-shadow:none; margin-right:20px;">
<img src="images/npm.png" width="200" style="border:0; background:none; box-shadow:none;">

---

# TypeScript

- Superset of JavaScript
- Compiled to JavaScript
- Statically type-checked

---

# TS = type safety

```ts
view: MapView | SceneView;

// ...

view = "not-a-view"; //TS2322: Type '"not-a-view"' is not assignable to type 'MapView | SceneView'.
```

---

# Typings!

Help describe what things are:

```ts
interface Person {
  name: string;
  age: number;
}
```

---

# TypeScript setup

- [Setup](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/index.html)
- [ArcGIS JS Typings](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/index.html#install-the-arcgis-api-for-javascript-typings)
- [Dojo Typings](https://github.com/dojo/typings/wiki/How-To-Use)

---

# ViewModels & Views

You'll notice our widgets have ViewModels.

---

# ViewModels

(The brain)

- Core logic of widget resides here
- Provides necessary APIs for the view to do it's thing
- No DOM/UI concerns (think business logic)
- Accessor classes

<img src="images/brain.gif" width="250">

---

# ViewModels: Why?

- Framework integration
- Reusability
- Separates concerns

---

# ViewModels: Extending

* Add or override behavior

```ts
class Foo extends declared(Bar) {

  // custom logic
  function yell(): void {
    console.log("AHHHH!");
  }

  // overrides
  function barMethod(): string {
    return "I'm foo now";
  }

}
```

---

# ViewModels: Extending via Mixins

* Isolated pieces of logic
* Reusable
* Mix in to enhance classes

```ts
interface Foo extends

class Foo extends declared(Bar, Mixin) {
   // nothing to see here, mixed in! :)
}
```

[Demo](./demos/voice-input)

---

# Views

(The face)

- `esri/widgets/Widget`
- Uses ViewModel APIs to render the UI
- View-specific logic resides here

<img src="images/view.gif" width="250">

---

# ViewModels & Views: Why?

- Separates concerns
- Framework compatibility

---

# Views: Let's customize!

We're going to customize a widget view using:

- `esri/widgets/Widget`
- JavaScript (plain old vanilla js)

---

# Demo: Compass Widget

<img src="images/compass.gif" width="350">

- [Compass API Ref](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Compass.html)
- [TSX View](https://github.com/Esri/arcgis-js-api/blob/4master/widgets/Compass.tsx)

---

# Demo steps

Create a custom widget using our `esri/widgets/Widget` framework (Compass).

[Demo steps: Compass view](https://github.com/jcfranco/dev-summit-2017-customizing-widgets/blob/master/customizing-widgets/demo-steps/compass.md)

---

# Demo: Search Widget

- [Search API Ref](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search.html)
- [SearchViewModel](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search-SearchViewModel.html)

---

# Demo steps

Create a custom view **not** using our widget framework (Search Widget).

[Demo steps: Search view](https://github.com/jcfranco/dev-summit-2017-customizing-widgets/blob/master/customizing-widgets/demo-steps/search.md)

---

# Theming

- Why
- What
  - BEM
- How
  - SASS
    - Variables
    - Mixins
    - etc
- Modify existing theme
- Create custom theme using SASS

<img src="images/fashion.gif" width="250">

---

# Tips & Tricks

- compact CSS build
- Automation (autoprefixer)

---

## Additional Resources

- [JavaScript Sessions at DevSummit](https://devsummit.schedule.esri.com/#search/sessions/q:javascript)
- [Documentation - 4.0 beta](https://developers.arcgis.com/javascript/beta/)

---

# Use the source luke

[GitHub Code](https://github.com/jcfranco/dev-summit-2017-customizing-widgets)

github.com/jcfranco/dev-summit-2017-customizing-widgets

todo: shorten url once URL is finalized. (moved to esri account)

---

# Please Take Our Survey!

1. Download the Esri Events app and go to DevSummit
2. Select the session you attended
3. Scroll down to the "Feedback" section
4. Complete Answers, add a Comment, and Select "Submit"

<img src="images/submit-feedback.png" width="200">

---

# Questions?

---

![Thank you!](images/thanks.gif)

---

<!-- .slide: data-background="../reveal.js/img/end.png" -->
