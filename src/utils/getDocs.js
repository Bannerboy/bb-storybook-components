import ReactDOMServer from 'react-dom/server';

const getDocs = (notes, Component, styles) => {
  const html = ReactDOMServer.renderToStaticMarkup(Component);
  const md = `
${notes}
### HTML
~~~html
${html}
~~~
---
### SCSS
~~~scss
${styles}
~~~
---
`;
  return {
    info: {
      text: md,
    },
  };
};
export default getDocs;
