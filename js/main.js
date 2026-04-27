const addPageStructure = (() => {
  const headNode = document.createElement('header');
  headNode.classList.add('transparentBox');
  const headNodeHeader = document.createElement('h1');
  headNodeHeader.textContent = 'Texto de la cabecera';
  headNode.appendChild(headNodeHeader);

  const navNode = document.createElement('nav');
  navNode.classList.add('transparentBox');
  const navNodeUl = document.createElement('ul');
  navNode.appendChild(navNodeUl);
  const navNodeLi = [];
  const navNodeLiA = [];
  // TODO: Mejorar esto con un array con nombres y urls.
  navNodeLi[0] = document.createElement('li');
  navNodeLiA[0] = document.createElement('a');
  navNodeLiA[0].href = '/index.html';
  navNodeLiA[0].textContent = 'Inicio';
  navNodeLi[0].appendChild(navNodeLiA[0]);
  navNodeUl.appendChild(navNodeLi[0]);
  navNodeLi[1] = document.createElement('li');
  navNodeLiA[1] = document.createElement('a');
  navNodeLiA[1].href = '/pages/biografia.html';
  navNodeLiA[1].textContent = 'Biografía';
  navNodeLi[1].appendChild(navNodeLiA[1]);
  navNodeUl.appendChild(navNodeLi[1]);
  navNodeLi[2] = document.createElement('li');
  navNodeLiA[2] = document.createElement('a');
  navNodeLiA[2].href = '/pages/portfolio.html';
  navNodeLiA[2].textContent = 'Portfolio';
  navNodeLi[2].appendChild(navNodeLiA[2]);
  navNodeUl.appendChild(navNodeLi[2]);
  navNodeLi[3] = document.createElement('li');
  navNodeLiA[3] = document.createElement('a');
  navNodeLiA[3].href = '/pages/contacto.html';
  navNodeLiA[3].textContent = 'Contacto';
  navNodeLi[3].appendChild(navNodeLiA[3]);
  navNodeUl.appendChild(navNodeLi[3]);

  // <nav class="transparentBox">
  //   <ul>
  //     <li><a href="../index.html">Inicio</a></li>
  //     <li><a class="selected">Biografía</a></li>
  //     <li><a href="portfolio.html">Portfolio</a></li>
  //     <li><a href="contacto.html">Contacto</a></li>
  //   </ul>
  // </nav>

  const footNode = document.createElement('footer');
  footNode.classList.add('transparentBox');
  const footNodeP = document.createElement('p');
  footNodeP.textContent = '© 2026 David Santamaría Rogado.';
  footNode.appendChild(footNodeP);

  const mainNode = document.querySelector('main');
  mainNode.parentNode.insertBefore(headNode, mainNode);
  mainNode.parentNode.insertBefore(navNode, mainNode);
  mainNode.parentNode.insertBefore(footNode, mainNode.nextSibling);
})();
