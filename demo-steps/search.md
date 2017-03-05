
# Customize Search Widget Steps

No typescript this time :D

We'll just use some vanilla JavaScript

### Require SearchViewModel

```
"esri/widgets/Search/SearchViewModel",
```

```
WebScene, SceneView, SearchViewModel
```

```
var searchViewModel = new SearchViewModel({
  view: view
});
```

### Create node for our widget

```
var searchNode = document.createElement("div");
view.ui.add(searchNode, "top-right");
```

### Create our widget's node structure

```
// create all the nodes
var containerNode = document.createElement("div");
containerNode.className = "vintage-search";
searchNode.appendChild(containerNode);

var formNode = document.createElement("form");
formNode.className = "vintage-search__form";
containerNode.appendChild(formNode);

var inputNode = document.createElement("input");
inputNode.className = "vintage-search__input";
inputNode.placeholder = "Where be treasure?";
inputNode.type = "search";
formNode.appendChild(inputNode);

var listNode = document.createElement("ul");
listNode.className = "vintage-search__suggestions";
containerNode.appendChild(listNode);
```

### Set popuptemplate for the VM

```
// Create popup template for VM
searchViewModel.popupTemplate = {
  title: "Search Result",
  content: "{Match_addr}"
};
```

### Create function for when form is submitted

```
function onSubmit(event) {
  event.preventDefault();
  event.stopPropagation();

  clearSuggestions();
  searchViewModel.search(inputNode.value);
}
```

### Create function for search input

```
function searchKey() {
  clearSuggestions();
  if (inputNode.value) {
    suggestTimer = setTimeout(function () {
      searchViewModel.suggest(inputNode.value);
    }, 300);
  }
}
```

### Create function to remove suggestions

```
function clearSuggestions() {
  searchViewModel.cancelSuggest();
  if (suggestTimer) {
    clearTimeout(suggestTimer);
  }
  listNode.classList.remove("vintage-search__suggestions--visible");
  listNode.innerHTML = "";
}
```

### Create function to show suggestions

```
function showSuggestions(event) {
  var results = event.results[0].results;
  listNode.innerHTML = "";
  results.forEach(function (result) {
    var listItemNode = document.createElement("li");
    listItemNode.className = "vintage-search__suggestion";
    listItemNode.innerHTML = result.text;
    listItemNode.onclick = function () {
      searchViewModel.search(result);
    };
    listNode.appendChild(listItemNode);
  });
  if (results.length) {
    listNode.classList.add("vintage-search__suggestions--visible");
  }
}
```

### create event listeners

formNode.onsubmit = onSubmit;

inputNode.onkeydown = searchKey;
inputNode.onsearch = searchKey;

searchViewModel.on("search-start", clearSuggestions);
searchViewModel.on("suggest-start", clearSuggestions);
searchViewModel.on("suggest-complete", showSuggestions);


### Add stylesheet for styles

```
<link rel="stylesheet" href="app/css/VintageSearch.css">
```

### Add styles to stylesheet

[Complete styles](https://github.com/jcfranco/dev-summit-2017-customizing-widgets/demos/search-complete/app/css/VintageSearch.css)
