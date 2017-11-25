var closeModal = function (event) {
    if (event.target === event.currentTarget) {
        var target = this.firstElementChild;

        z(target).unwrap(this);
        z('.backdrop').remove();
    }
};

z("[data-modal]").on('click', function () {
    var targetId = this.getAttribute('data-modal');
    var target = z('#' + targetId);

    var wrapper = z.create('div', ['modal-wrapper']);
    target.wrap(wrapper);

    var backdrop = z.create('div', ['backdrop']);

    // TODO: prependChild(document.body, backdrop)
    document.body.insertBefore(backdrop, document.body.firstChild);

    target.show();

    wrapper.addEventListener('click', closeModal);
});
