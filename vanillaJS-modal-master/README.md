# vanillaJS-modal
Modal with zero dependencies written in JS. With help from scotch.io

A modal that can initialized anywhere using 'new Modal()'

e.g.) 
  var myModal = new Modal();
  
Optional arguments: 

className (string): the name(s) of any CSS classes to add to the modal
closeButton (bool): default is true
content (string/dom element): specify the content
maxWidth (int): default 600px
minWidth (int): default 280px
overlay (bool): default is true

Example with all params)
  var myModal = new Modal({
    className: 'my-css-class',
    closeButton: true,
    content: '<p>Testing this modal!</p>',
    maxWidth: 600,
    minWidth: 280,
    overlay: true
  });

