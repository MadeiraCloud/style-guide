$(function() {
  $('body').on('DOMNodeInserted', '.property .group', function(event) {
    return setTimeout(function() {
      var $valueDom;
      $valueDom = $(event.target).find('select.value');
      if (!$valueDom.hasClass('selectized')) {
        if ($valueDom.hasClass('bool')) {
          $valueDom.selectize({
            persist: false,
            valueField: 'value',
            labelField: 'name',
            searchField: ['name'],
            create: false,
            openOnFocus: false,
            plugins: ['restore_on_return'],
            onInitialize: function() {
              return this.setValue(this.$input.attr('value'));
            },
            options: [
              {
                name: 'TRUE',
                value: 'true'
              }, {
                name: 'FALSE',
                value: 'false'
              }
            ],
            render: {
              option: function(item) {
                return '<div>O ' + item.name + '</div>';
              },
              item: function(item) {
                return '<div>O ' + item.name + '</div>';
              }
            },
            onFocus: function() {}
          });
        }
        if ($valueDom.hasClass('option')) {
          return $valueDom.selectize({
            persist: false,
            create: false,
            openOnFocus: false,
            plugins: ['restore_on_return'],
            onInitialize: function() {
              return this.setValue(this.$input.attr('value'));
            }
          });
        }
      }
    }, 0);
  });
  return $('.property').html($('#dom').html()).append($('#dom').html());
});
