$ () ->

    $('.property').on 'DOMNodeInserted', '.group', (event) ->

        setTimeout () ->

            $valueDom = $(event.target).find('select.value')

            if not $valueDom.hasClass('selectized')

                if $valueDom.hasClass('bool')

                    $valueDom.selectize({
                        persist: false,
                        valueField: 'value',
                        labelField: 'text',
                        searchField: ['text'],
                        create: false,
                        openOnFocus: false,
                        plugins: ['restore_on_return'],
                        onInitialize: () ->
                            @setValue(@$input.attr('value'), true)
                        options: [
                            {text: 'TRUE', value: 'true'},
                            {text: 'FALSE', value: 'false'}
                        ],
                        render: {
                            option: (item) ->
                                return '<div>O ' + item.text + '</div>'
                            item: (item) ->
                                return '<div>O ' + item.text + '</div>'
                        },
                    })

                if $valueDom.hasClass('option')

                    $valueDom.selectize({
                        persist: false,
                        create: false,
                        openOnFocus: false,
                        plugins: ['restore_on_return']
                        onInitialize: () ->
                            @setValue(@$input.attr('value'), true)
                        ,
                        render: {
                            option: (item) ->
                                return '<div>O ' + item.text + '</div>'
                            item: (item) ->
                                return '<div>O ' + item.text + '</div>'
                        }
                    })

        , 1

    $(document).on 'change', 'select.value', (event) ->

        console.log(event.target.value)

    $('.property').html($('#dom').html())