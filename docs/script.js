/**
 * Load.
 */
var script = document.createElement('script');
script.src =
  location.hostname === ''
    ? '../umd/phonetic-alphabet-converter.js'
    : 'https://unpkg.com/phonetic-alphabet-converter@latest/umd/phonetic-alphabet-converter.js';
script.addEventListener('load', main);
document.head.appendChild(script);

/**
 * Main.
 */
function main() {
  var converter = window.PhoneticAlphabetConverter.default;
  var mdc = window.mdc;
  var MDCChipSet = mdc.chips.MDCChipSet;
  var chipSet = document.querySelector('.mdc-chip-set');

  // Instantiate single textfield component rendered in the document
  mdc.textField.MDCTextField.attachTo(
    document.querySelector('.mdc-text-field')
  );

  /**
   * @param {string} text
   * @return {string}
   */
  function generateChipMarkup(text) {
    var html = '<span class="mdc-chip__text">' + text + '</span>';
    html += '<div class="mdc-chip__ripple"></div>';
    html = '<div class="mdc-chip">' + html + '</div>';
    return html;
  }

  // Convert input to NATO phonetic alphabet text
  var input = document.querySelector('input');
  input.focus();
  input.addEventListener('input', function(event) {
    var text = event.target.value;
    var words = converter(text);
    var chips = words.map(function(word) {
      return word ? generateChipMarkup(word) : null;
    });
    chipSet.innerHTML = chips.join('');
    new MDCChipSet(chipSet);
  });
}
