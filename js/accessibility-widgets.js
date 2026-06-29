// High contrast, text size, and dyslexia-friendly font toggles. Each persists via localStorage.

document.addEventListener('DOMContentLoaded', function () {
  var contrastToggle = document.getElementById('contrast-toggle');
  var textToggle = document.getElementById('text-size-toggle');
  var dyslexiaToggle = document.getElementById('dyslexia-toggle');

  if (contrastToggle) {
    contrastToggle.addEventListener('click', function () {
      var isOn = document.body.classList.toggle('high-contrast');
      contrastToggle.setAttribute('aria-pressed', isOn.toString());
      localStorage.setItem('high-contrast', isOn ? 'true' : 'false');
    });
    if (localStorage.getItem('high-contrast') === 'true') {
      document.body.classList.add('high-contrast');
      contrastToggle.setAttribute('aria-pressed', 'true');
    }
  }

  if (textToggle) {
    textToggle.addEventListener('click', function () {
      var isLarge = document.body.classList.toggle('large-text');
      textToggle.setAttribute('aria-pressed', isLarge.toString());
      localStorage.setItem('large-text', isLarge ? 'true' : 'false');
    });
    if (localStorage.getItem('large-text') === 'true') {
      document.body.classList.add('large-text');
      textToggle.setAttribute('aria-pressed', 'true');
    }
  }

  if (dyslexiaToggle) {
    dyslexiaToggle.addEventListener('click', function () {
      var isOn = document.body.classList.toggle('dyslexic-font');
      dyslexiaToggle.setAttribute('aria-pressed', isOn.toString());
      localStorage.setItem('dyslexic-font', isOn ? 'true' : 'false');
    });
    if (localStorage.getItem('dyslexic-font') === 'true') {
      document.body.classList.add('dyslexic-font');
      dyslexiaToggle.setAttribute('aria-pressed', 'true');
    }
  }
});
