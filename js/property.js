$(function() {
  $('.value.bool').selectize({
    persist: false,
    valueField: 'value',
    labelField: 'name',
    searchField: ['name'],
    create: false,
    openOnFocus: false,
    plugins: ['restore_on_return'],
    onInitialize: function() {
      return this.setValue(this.$input.attr('data-value'));
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
  $('.value.bool').on('change', function(event) {
    return console.log(event.target.value);
  });
  return $('.value.bool')[0].selectize.setValue('false');
});
