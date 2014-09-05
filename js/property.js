$(function() {
  $('.property').on('DOMNodeInserted', '.group', function(event) {
    var $valueDom, maxItems, mutil, that;
    that = this;
    $valueDom = $(event.target).find('select.value');
    if (!$valueDom.hasClass('selectized')) {
      mutil = false;
      maxItems = void 0;
      if ($valueDom.hasClass('mutil')) {
        mutil = true;
        maxItems = null;
      }
      if ($valueDom.hasClass('bool')) {
        $valueDom.selectize({
          multi: mutil,
          maxItems: maxItems,
          persist: false,
          valueField: 'value',
          labelField: 'text',
          searchField: ['text'],
          create: false,
          openOnFocus: false,
          plugins: ['custom_selection'],
          onInitialize: function() {
            return this.setValue(this.$input.attr('value').split(','), true);
          },
          options: [
            {
              text: 'True',
              value: 'true'
            }, {
              text: 'False',
              value: 'false'
            }
          ],
          render: {
            option: function(item) {
              return '<div>O ' + item.text + '</div>';
            },
            item: function(item) {
              return '<div>O ' + item.text + '</div>';
            }
          }
        });
      }
      if ($valueDom.hasClass('option')) {
        return $valueDom.selectize({
          multi: mutil,
          maxItems: maxItems,
          persist: false,
          create: false,
          openOnFocus: false,
          plugins: ['custom_selection'],
          onInitialize: function() {
            return this.setValue(this.$input.attr('value').split(','), true);
          },
          render: {
            option: function(item) {
              return '<div>' + item.text + '</div>';
            },
            item: function(item) {
              return '<div>' + item.text + '</div>';
            }
          }
        });
      }
    }
  });
  $(document).on('change', 'select.value', function(event) {
    return console.log($(event.target).getValue());
  });
  return $('.property').html($('#dom').html());
});
