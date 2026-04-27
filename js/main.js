const addPageStructure = (() => {
  console.log(document.URL);
  console.log(document.baseURI);
  console.log(document.location.pathname)

  const headNode = document.createElement('header');
  headNode.classList.add('transparentBox');
  const headNodeHeader = document.createElement('h1');
  headNodeHeader.textContent = 'Texto de la cabecera';
  headNode.appendChild(headNodeHeader);

  const navNode = document.createElement('nav');
  navNode.classList.add('transparentBox');
  const navNodeUl = document.createElement('ul');
  navNode.appendChild(navNodeUl);
  const navLinks = [
    { nombre: 'Inicio', enlace: '/index.html', },
    { nombre: 'Biografia', enlace: '/pages/biografia.html', },
    { nombre: 'Portfolio', enlace: '/pages/portfolio.html', },
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
