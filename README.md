# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Variables de entorno
* En un proyecto levantado con vite como es este hay que ponerle delante de cada variable de entorno el prefijo VITE_ para que funcionen.

Compatibilidades de Material UI
* Tuve que cambiar del código original (curso de React de Fernando Herrera, módulo Journal) los componentes GRID de Material UI, deprecados a la fecha actual, por los GRID2.

Refactorización de código
* Volví a construir el componente card de login por uno que me pareció mejor desde el punto de vista del diseño y desde la compatibilidad de sus componentes de ui, además de que pretendo ampliar sus funcionalidades.