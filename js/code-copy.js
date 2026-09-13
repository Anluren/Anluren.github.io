// Add a copy-to-clipboard button to every AsciiDoc listing block.
(function ($) {
  'use strict';

  function fallbackCopy(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    var ok = false;
    try {
      ok = document.execCommand('copy');
    } catch (e) {
      ok = false;
    }
    document.body.removeChild(textarea);
    return ok;
  }

  function addCopyButtons() {
    $('.listingblock').each(function () {
      var block = $(this);
      if (block.find('.code-copy-btn').length) {
        return;
      }

      var code = block.find('pre code');
      var source = code.length ? code : block.find('pre');
      if (!source.length) {
        return;
      }

      var button = $('<button>')
        .addClass('code-copy-btn')
        .attr('type', 'button')
        .attr('aria-label', 'Copy code to clipboard')
        .attr('title', 'Copy')
        .html('<i class="fa fa-copy"></i>');

      button.on('click', function () {
        var text = source.text();

        var done = function (ok) {
          button.html(ok ? '<i class="fa fa-check"></i>' : '<i class="fa fa-copy"></i>');
          button.attr('title', ok ? 'Copied!' : 'Copy');
          if (ok) {
            setTimeout(function () {
              button.html('<i class="fa fa-copy"></i>');
              button.attr('title', 'Copy');
            }, 1500);
          }
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(
            function () { done(true); },
            function () { done(fallbackCopy(text)); }
          );
        } else {
          done(fallbackCopy(text));
        }
      });

      block.css('position', 'relative');
      block.append(button);
    });
  }

  $(function () {
    addCopyButtons();
  });
})(jQuery);
