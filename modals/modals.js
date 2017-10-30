var elements = document.querySelectorAll("[data-modal]");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function (event) {

        var targetId = this.getAttribute('data-modal');

        var target = document.getElementById(targetId);
        target.style.display = "block";

         var wrapper = document.createElement ('div');
         wrapper.classList.add('modal-wrapper');
         wrapper.addEventListener('click', function () {
             // TODO
         });

         // TODO: use Wrap helper https://plainjs.com/javascript/manipulation/wrap-an-html-structure-around-an-element-28/
         target.parentNode.insertBefore(wrapper, target);
         wrapper.appendChild(target);

        var backdrop = document.createElement('div');
        backdrop.classList.add('backdrop');
        document.body.insertBefore(backdrop, document.body.firstChild);
    });
}
//
// document.addEventListener("click", function () {
//     var targets = document.querySelectorAll(".js-modal-target");
//     for (var i = 0; i < targets.length; i++) {
//         targets[i].style.display = "none";
//         // target.outerHTML = '<div class="wrapper">' + target.outerHTML + '</div>'
//     }
// });
