function customRender(reactElement, container) {
    const element = document.createElement(reactElement.type);
    element.innerHTML = reactElement.Children;
    element.setAttribute('href', reactElement.props.href);
    element.setAttribute('target', reactElement.props.target);
    container.appendChild(element);

   

    
}

const ReactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
    },
    Children: 'Click me to visit'
}
const mainContainer = document.querySelector('.root');
customRender(ReactElement, mainContainer)
