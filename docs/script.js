/**
 * Load script.
 */
var script = document.createElement('script');
script.src =
  location.hostname === ''
    ? '../umd/phonetic-alphabet-converter.min.js'
    : 'https://unpkg.com/phonetic-alphabet-converter@latest/umd/phonetic-alphabet-converter.min.js';
document.head.appendChild(script);

/**
 * Initialize app.
 */
script.addEventListener('load', function () {
  var converter = window.PhoneticAlphabetConverter.default;
  var mdc = window.mdc;
  var MDCChipSet = mdc.chips.MDCChipSet;
  var chipSet = document.querySelector('.mdc-chip-set');

  // Instantiate single textfield component rendered in the document
  mdc.textField.MDCTextField.attachTo(
    document.querySelector('.mdc-text-field')
  );

  /**
   * Generates chip markup.
   *
   * @param {string} word
   * @return {string}
   */
  function generateChipMarkup(word) {
    var html = '<span class="mdc-chip__text">' + word + '</span>';
    html += '<div class="mdc-chip__ripple"></div>';
    html = '<div class="mdc-chip">' + html + '</div>';
    return html;
  }

  // Convert string to NATO phonetic alphabet words
  var input = document.querySelector('input');
  input.focus();
  input.addEventListener('input', function (event) {
    var text = event.target.value;
    var words = converter(text);
    var chips = words.map(generateChipMarkup);
    chipSet.innerHTML = chips.join('');
    new MDCChipSet(chipSet);
  });
});
