/**
 * @param {Element} element
*/
function remove(element) {
    element.parentNode.removeChild(element);
}

/**
 * @param {Element} element
 * @param {Element} wrapper
 */
function wrap(element, wrapper) {
    var parent = element.parentNode;
    parent.insertBefore(wrapper, element);
    wrapper.appendChild(element);
}

/**
 * @param {string} tagName
 * @param {string[]} classNames
 * @return {Element}
 */
function create(tagName, classNames) {
    var element = document.createElement(tagName);
    classNames.forEach(function (className) {
        element.classList.add(className);
    });
    return element;
}


function unwrap(target, wrapper) {

    // TODO: insertBefore(target, wrapper)
    var parent = wrapper.parentNode;
    parent.insertBefore(target, wrapper);

    // TODO: hide(target)
    target.style.display = "none";

    remove(wrapper);
}

var closeModal = function (event) {
    if (event.target === event.currentTarget) {
        var target = this.firstElementChild;
        var backdrop = document.querySelector('.backdrop');

        unwrap(target,this);
        remove(backdrop);
    }
};

// TODO: addEventListenerForAll("[data-dropdown]", 'click', function(event){...})
var elements = document.querySelectorAll("[data-modal]");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function (event) {

        var targetId = this.getAttribute('data-modal');

        var target = document.getElementById(targetId);

        var wrapper = create('div', ['modal-wrapper']);
        wrap(target, wrapper);

        var backdrop = create('div', ['backdrop']);

        // TODO: prependChild(document.body, backdrop)
        document.body.insertBefore(backdrop, document.body.firstChild);

        // TODO show(target)
        target.style.display = "block";

        wrapper.addEventListener('click', closeModal);
    });
}
