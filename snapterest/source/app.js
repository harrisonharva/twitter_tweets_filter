var React = require('react');
var ReactDOM = require('react-dom');

// Creation of HTML tags and rendering it 
var h1 = React.createElement('h1', {className: 'header', key: 'header1'}, 'Creation of HTML tags and rendering it ');
var h2 = React.createElement('h1', {className: 'header', key: 'header2'}, 'hello !!!! how are ??? Khana khake jana !!!!');
var p = React.createElement('p', {className: 'content', key: 'content'}, 'And that is how it works... yo from p tag');
var reactFragment = [h1, h2, p];
var section = React.createElement('section', {className: 'container', key: 'container'}, reactFragment);
//ReactDOM.render(section, document.getElementById('react-application'));

// Creation of HTML group tags and rendering it 
var h1 = React.createElement('h1', {className: 'header', key: 'header'}, 'Creation of HTML group tags and rendering it ');
var listItemElement1 = React.createElement('li', {className: 'item-1', key: 'item-1'}, 'Item-1');
var listItemElement2 = React.createElement('li', {className: 'item-2', key: 'item-2'}, 'Item-2');
var listItemElement3 = React.createElement('li', {className: 'item-3', key: 'item-3'}, 'Item-3');
var reactFragment = [h1, listItemElement1, listItemElement2, listItemElement3];
var listOfItems = React.createElement('ul', {className: 'list-of-items', key: 'list-of-items'}, reactFragment);
//ReactDOM.render(listOfItems, document.getElementById('react-application'));

// Creation of HTML Group tags using createFactoryFactory() and rendering it 
var h1 = React.createElement('h1', {className: 'header', key: 'header'}, 'Creation of HTML Group tags using createFactoryFactory() and rendering it ');
var createListItemElement = React.createFactory('li');
var listItemElement1 = createListItemElement({className: 'item-1', key: 'item-1'}, 'Item-1');
var listItemElement2 = createListItemElement({className: 'item-2', key: 'item-2'}, 'Item-2');
var listItemElement3 = createListItemElement({className: 'item-3', key: 'item-3'}, 'Item-3');
var reactFragment = [h1, listItemElement1, listItemElement2, listItemElement3];
var listOfItems = React.createElement('ul', {className: 'list-of-items'}, reactFragment);
//ReactDOM.render(listOfItems, document.getElementById('react-application'));

// Creation of HTML Group tags using React.DOM.xxx() and rendering it 
var h1 = React.createElement('h1', {className: 'header', key: 'header'}, 'Creation of HTML Group tags using React.DOM.xxx() and rendering it ');
var listItemElement1 = React.DOM.li({className: 'item-1', key: 'item-1'}, 'Item-1');
var listItemElement2 = React.DOM.li({className: 'item-2', key: 'item-2'}, 'Item-2');
var listItemElement3 = React.DOM.li({className: 'item-3', key: 'item-3'}, 'Item-3');
var reactFragment = [h1, listItemElement1, listItemElement2, listItemElement3];
var listOfItems = React.DOM.ul({className: 'list-of-items'}, reactFragment);
//ReactDOM.render(listOfItems, document.getElementById('react-application'));

// Creation of React Elements using JSX
var listOfItems = <ul className="list-of-items">
                   <li className="item-1">Item 1</li>
                   <li className="item-2">Item 2</li>
                   <li className="item-3">Item 3</li>
                  </ul>;
ReactDOM.render(listOfItems, document.getElementById('react-application'));	

