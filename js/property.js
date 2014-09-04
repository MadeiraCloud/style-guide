$(function() {
  $('.property').on('DOMNodeInserted', '.group', function(event) {
    return setTimeout(function() {
      var $valueDom;
      $valueDom = $(event.target).find('select.value');
      if (!$valueDom.hasClass('selectized')) {
        if ($valueDom.hasClass('bool')) {
          $valueDom.selectize({
            persist: false,
            valueField: 'value',
            labelField: 'text',
            searchField: ['text'],
            create: false,
            openOnFocus: false,
            plugins: ['restore_on_return'],
            onInitialize: function() {
              return this.setValue(this.$input.attr('value'), true);
            },
            options: [
              {
                text: 'TRUE',
                value: 'true'
              }, {
                text: 'FALSE',
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
            persist: false,
            create: false,
            openOnFocus: false,
            plugins: ['restore_on_return'],
            onInitialize: function() {
              return this.setValue(this.$input.attr('value'), true);
            },
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
      }
    }, 1);
  });
  $(document).on('change', 'select.value', function(event) {
    return console.log(event.target.value);
  });
  return $('.property').html($('#dom').html());
});
