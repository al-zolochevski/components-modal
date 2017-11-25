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

        // TODO show(target), hide(target)
        target.style.display = "block";

        wrapper.addEventListener('click', closeModal);
    });
}
