$ () ->

    $('.value.bool').selectize({
        persist: false,
        valueField: 'value',
        labelField: 'name',
        searchField: ['name'],
        create: false,
        openOnFocus: false,
        plugins: ['restore_on_return'],
        onInitialize: () ->
            @setValue(@$input.attr('data-value'))
        options: [
            {name: 'TRUE', value: 'true'},
            {name: 'FALSE', value: 'false'}
        ],
        render: {
            option: (item) ->
                return '<div>O ' + item.name + '</div>'
            item: (item) ->
                return '<div>O ' + item.name + '</div>'
        },
        onFocus: () ->
    })

    $('.value.bool').on 'change', (event) ->
        console.log(event.target.value)

    $('.value.bool')[0].selectize.setValue('false');