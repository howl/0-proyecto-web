'use strict';

(() => {
  const bodyNode = document.querySelector('body');
  const fragmento = document.createDocumentFragment();
  const backgroundNode = document.createElement('div');
  backgroundNode.classList.add('background');
  for (let i = 0; i < 20; i++)
    backgroundNode.appendChild(document.createElement('span'));
  fragmento.appendChild(backgroundNode);
  console.log(fragmento);

  bodyNode.prepend(fragmento);
})();
