function createEl(tag, ClassName, value) {
    let tagElement = document.createElement(`${tag}`)
    tagElement.classList.add(`${ClassName}`);
    tagElement.innerText = `${value}`;
    return tagElement
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

const spanForImg = createEl('span', 'spanForImg', '');
const rocket = createEl('img', 'rocket', '');

rocket.setAttribute('src', 'images/rocket.png')



spanForImg.appendChild(rocket)

const spanForText = createEl('span', 'spanForText', '');
const textGetCenario = createEl('p', 'textGetCenario', 'Get Cenario')

spanForText.appendChild(textGetCenario);

btnForGetStarted.appendChild(spanForImg);
btnForGetStarted.appendChild(spanForText);

divGetCenario.appendChild(eComm);
divGetCenario.appendChild(btnForGetStarted);






