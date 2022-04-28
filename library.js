
/*!
 * This file was originally licensed All Rights Reserved by its author, Rachel Franks,
 * and appears in other works.
 *
 * This copy has been relicensed to the public domain.
 */

const $  = (id           ) => document.getElementById  (id       );
const $c = (classname    ) => document.querySelectorAll(classname);
const $s = (element      ) => (typeof element === 'string' ? $(element) : element);
const $a = (parent, child) => $s(parent).appendChild($s(child));
const $d = (type, classname, id) => {
    const element = document.createElement(type);
    if (classname) element.classList.add(classname);
    if (id       ) element.id = id;
    return element;
}
const $text = (type, classname, text, href, id) => {
    const element = $d(type, classname, id);
    element.textContent = text;
    if (href) element.href = href;
    return element;
};
const $content = (element, text, href) => {
    element = $s(element);
    element.textContent = text;
    if (href) element.href = href;
    return element;
};
const $listen = (element, type, callback) => {
    $s(element).addEventListener(type, callback);
    return $s(element);
};

const request = async (url, data, no_json) => {

    let body = data ? JSON.stringify(data) : undefined;

    const response = await (fetch(url, {
        method: 'POST',
        headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json',
        },
        body: body,
    }));

    if (no_json) return response;
    else         return response.json();
}

const to_hex = value => {
    return '0x' + value.toString(16);
};
