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

var elements = document.querySelectorAll("[data-modal]");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function (event) {

        var targetId = this.getAttribute('data-modal');

        var target = document.getElementById(targetId);
        target.style.display = "block";

        var wrapper = create('div', ['modal-wrapper']);
        var parent = target.parentNode;
        wrap(target, wrapper);

        var backdrop = create('div', ['backdrop']);

        // TODO: create prependChild function
        document.body.insertBefore(backdrop, document.body.firstChild);

        wrapper.addEventListener('click', function (event) {
            if (event.target === event.currentTarget) {
                // TODO: try to less use outside variables

                // TODO: create unwrap function
                parent.insertBefore(target, wrapper);
                remove(wrapper);
                remove(backdrop);

                target.style.display = "none";
            }
        });
    });
}
