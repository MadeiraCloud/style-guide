$ () ->

    $('body').on 'DOMNodeInserted', '.property .group', (event) ->

        setTimeout () ->

            $valueDom = $(event.target).find('select.value')

            if not $valueDom.hasClass('selectized')

                if $valueDom.hasClass('bool')

                    $valueDom.selectize({
                        persist: false,
                        valueField: 'value',
                        labelField: 'name',
                        searchField: ['name'],
                        create: false,
                        openOnFocus: false,
                        plugins: ['restore_on_return'],
                        onInitialize: () ->
                            @setValue(@$input.attr('value'))
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

                if $valueDom.hasClass('option')

                    $valueDom.selectize({
                        persist: false,
                        create: false,
                        openOnFocus: false,
                        plugins: ['restore_on_return']
                        onInitialize: () ->
                            @setValue(@$input.attr('value'))
                    })
        , 0

    $('.property').html($('#dom').html()).append($('#dom').html())