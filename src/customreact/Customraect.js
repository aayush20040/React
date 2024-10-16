function customrender(reactelement,maincontainer){
     let domelement=document.createElement(reactelement.type)
    domelement.innerHTML=reactelement.Children
    domelement.setAttribute('href',  reactelement.props.href)
    domelement.setAttribute('target' ,reactelement.props.target)
    maincontainer.appendChild(domelement)


}

const reactelement={
    type:"a",
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    Children:"click me"                     


}
let maincontainer=document.querySelector("#root");
customrender(reactelement,maincontainer);

// function customrender(reactelement, container) {
//     let domelement = document.createElement(reactelement.type); // Create element based on type
//     domelement.innerHTML = reactelement.Children; // Set inner content
//     if (reactelement.props.href) {
//         domelement.setAttribute('href', reactelement.props.href); // Set href attribute
//     }
//     if (reactelement.props.target) {
//         domelement.setAttribute('target', reactelement.props.target); // Set target attribute
//     }
//     container.appendChild(domelement); // Append to container
// }

// const reactelement = {
//     type: "a", // Anchor tag
//     props: {
//         href: 'https://google.com', // Link URL
//         target: '_blank' // Open in new tab
//     },
//     Children: "Click me" // Inner text of the link
// };

// let maincontainer = document.querySelector("#root"); // Select main container
// customrender(reactelement, maincontainer); // Call function to render
