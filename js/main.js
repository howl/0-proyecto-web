'use strict';

const addPageStructure = (() => {
  const headNode = document.createElement('header');
  headNode.classList.add('transparentBox');
  const headNodeHeader = document.createElement('h1');
  headNodeHeader.textContent = document.querySelector('head>title').textContent.split(' - ')[0];
  headNode.appendChild(headNodeHeader);

  const navNode = document.createElement('nav');
  navNode.id = 'principalNav';
  navNode.classList.add('transparentBox');
  const navNodeUl = document.createElement('ul');
  navNode.appendChild(navNodeUl);
  const navLinks = [
    { nombre: 'Inicio', enlace: '/index.html', },
    { nombre: 'Biografia', enlace: '/pages/biografia.html', },
    { nombre: 'Portfolio', enlace: '/pages/portfolio.html', },
    { nombre: 'Galería', enlace: '/pages/galeria.html', },
    { nombre: 'Contacto', enlace: '/pages/contacto.html', },
  ];
  navLinks.forEach((navLink) => {
    const navNodeLi = document.createElement('li');
    const navNodeLiA = document.createElement('a');
    if (navLink.enlace !== document.location.pathname)
      navNodeLiA.href = navLink.enlace;
    else
      navNodeLiA.classList.add('selected');
    navNodeLiA.textContent = navLink.nombre;
    navNodeLi.appendChild(navNodeLiA);
    navNodeUl.appendChild(navNodeLi);
  });

  const asideNode = document.createElement('aside');
  asideNode.id = 'publicidad';
  asideNode.classList.add('transparentBox');
  const asideNodeP = document.createElement('p');
  asideNodeP.classList.add('solidBox');
  asideNodeP.innerHTML = 'Espacio publicitario:<br>Spray repelente de cuñados<br>Aire de la sierra';
  asideNode.appendChild(asideNodeP);

  const footNode = document.createElement('footer');
  footNode.classList.add('transparentBox');
  const footNodeP = document.createElement('p');
  /* Uso innerHTML porque textContent no interpreta HTML entities. */
  footNodeP.innerHTML = '&copy; 2026 David Santamaría Rogado.';
  footNode.appendChild(footNodeP);

  const mainNode = document.querySelector('main');
  mainNode.parentNode.insertBefore(headNode, mainNode);
  mainNode.parentNode.insertBefore(asideNode, mainNode);
  mainNode.parentNode.insertBefore(navNode, mainNode);
  mainNode.parentNode.insertBefore(footNode, mainNode.nextSibling);
})();
