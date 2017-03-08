
# Customize Compass Widget Steps

# TypeScript setup

- [Setup](https://developers.arcgis.com/javascript/latest/guide/typescript-setup/index.html)

### Setup Dojo config

```
<script>
  var package_path = window.location.pathname.substring(0, 
    window.location.pathname.lastIndexOf("/"));
  dojoConfig = {
    async: true,
    packages: [{
      name: "app",
      location: package_path + "/app"
    }]
  };
</script>
```

### Add TSX File

- Add tsx file and name `VintageCompass.tsx`
  - On [SDK widget page](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Compass.html)
- Change relative paths to `esri/*`

### Compile TS

- compile TSX file.

```
tsc --watch
```

If successful, we're ready to start coding!

### Modify `index.html` to require the VintageCompass

```
"esri/WebScene",
"esri/views/SceneView",
"app/VintageCompass",
"dojo/domReady!"
```

```
WebScene, SceneView, VintageCompass
```

```
var compass = new VintageCompass({
  view: view
});
```

### compile and preview

Verify that everything's all good


### Create stylesheet for our new compass


### Add stylesheet to HTML

```
<link rel="stylesheet" href="app/css/VintageCompass.css">
```

### Add styles to stylesheet

[Styles](https://github.com/jcfranco/dev-summit-2017-customizing-widgets/blob/master/demos/compass-complete/app/css/VintageCompass.css)


### Modify TSX file to use new layout and styles

### Modify class

```
@subclass("esri.widgets.VintageCompass")
class VintageCompass extends declared(Widget) {
```

```
export = VintageCompass;
```

### Remove CSS object

```
const CSS = {
  base: "esri-compass esri-widget-button esri-widget",
  text: "esri-icon-font-fallback-text",
  icon: "esri-compass__icon",
  rotationIcon: "esri-icon-dial",
  northIcon: "esri-icon-compass",

  // common
  interactive: "esri-interactive",
  disabled: "esri-disabled"
};
```

### Add new CSS Object

```
const CSS = {
  base: "vintage-compass",
  compass: "vintage-compass__compass",
  dialContainer: "vintage-compass__dial-container",
  dial: "vintage-compass__dial"
};
```

### Remove classes and virtual nodes

```
const dynamicRootClasses = {
  [CSS.disabled]: disabled,
  [CSS.interactive]: !disabled
};

const dynamicIconClasses = {
  [CSS.northIcon]: showingCompass,
  [CSS.rotationIcon]: !showingCompass
};

return (
  <div bind={this}
    class={CSS.base}
    classes={dynamicRootClasses}
    onclick={this._reset}
    onkeydown={this._reset}
    role="button"
    tabIndex={tabIndex}>
    <span aria-hidden="true"
      class={CSS.icon}
      classes={dynamicIconClasses}
      styles={this._toRotationTransform(orientation)}
      title={i18n.reset} />
    <span class={CSS.text}>{i18n.reset}</span>
  </div>
);
```

### Add new classes and virtual nodes

```
return (
  <div bind={this}
    class={CSS.base}
    title={i18n.reset}
    onclick={this._reset}
    onkeydown={this._reset}
    tabIndex={tabIndex}>
    <img class={CSS.compass} src="./app/images/compass.svg" />
    <div class={CSS.dialContainer} styles={this._toRotationTransform(orientation)}>
      <img class={CSS.dial} src="./app/images/compass-dial.svg" />
    </div>
  </div>
);
```

### compile and preview

Verify that everything's all good


