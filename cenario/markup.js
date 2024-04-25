function createEl(tag, ClassName, value) {
    let tagElement = document.createElement(`${tag}`);
    tagElement.classList.add(`${ClassName}`);
    if (value) { // We are cheking if value is defined
        tagElement.innerText = value; //  and then we set text only if it s defined
    }
    return tagElement;
}


const body = document.querySelector("body")

const header = createEl('header', 'getStarted_navBar', '');
body.appendChild(header)

const divGetCenario = createEl('div', 'getCenario', '')
const navBar = createEl('nav', 'navBar', '')
header.appendChild(divGetCenario)
header.appendChild(navBar)

const eComm = createEl('span', 'spanText', 'eCommerce Funnel Analytics. Try it free now.');
const btnForGetStarted = createEl('button', 'getStartedCenario', '');

// span for rocket img and img itself
const spanForImg = createEl('span', 'spanForImg', '');
const rocket = createEl('img', 'rocket', '');

rocket.setAttribute('src', 'images/rocket.png')

spanForImg.appendChild(rocket)

//span for text in our btn for Get Cenario
const spanForText = createEl('span', 'spanForText', '');
const textGetCenario = createEl('p', 'textGetCenario', 'Get Cenario')

spanForText.appendChild(textGetCenario);

// basic appending el to parent
btnForGetStarted.appendChild(spanForImg);
btnForGetStarted.appendChild(spanForText);

divGetCenario.appendChild(eComm);
divGetCenario.appendChild(btnForGetStarted);

// logo img
const divLogo = createEl('div', 'divLogo', '');
const logoImg = createEl('img', 'logo', '');
logoImg.setAttribute('src', 'images/logo.png');
divLogo.appendChild(logoImg);
navBar.appendChild(divLogo)


// elements for rights side of navBar
const divForNavItems = createEl('div', 'divForNavItems', '');
const listItems = createEl('ul', 'listItems');

for(let i = 0; i < 3; i++) {
    const items = createEl('li', 'listPodItems', '');

    // Creating a element for every li el
    const itegrationLink = createEl('a', 'item', 'Integrations');
    const SassLink = createEl('a', 'item', 'SasS');
    const ShopifyLink = createEl('a', 'item', 'Shopify');

    // Adding right a element in every li el
    if(i === 0) {
        items.appendChild(itegrationLink);
    } else if (i === 1) {
        items.appendChild(SassLink);
    } else if (i === 2) {
        items.appendChild(ShopifyLink);
    } else {
        console.log('error')
    }

    // Adding every li el in out list
    listItems.appendChild(items);
}

divForNavItems.appendChild(listItems);
navBar.appendChild(divForNavItems);

// div for btn's
const divForDemoAndLogIn = createEl('div', 'divForDemoAndLogIn', '');
const btnDemo = createEl('button', 'btnDemo', 'Try Free Demo!');
const btnLogIn = createEl('button', 'btnLogIn', 'Log In');
divForDemoAndLogIn.appendChild(btnDemo);
divForDemoAndLogIn.appendChild(btnLogIn)
divForNavItems.appendChild(divForDemoAndLogIn)

