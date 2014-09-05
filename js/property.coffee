$ () ->

    $('.property').on 'DOMNodeInserted', '.group', (event) ->

        that = @

        # setTimeout () ->

        $valueDom = $(event.target).find('select.value')

        if not $valueDom.hasClass('selectized')

            mutil = false
            maxItems = undefined
            if $valueDom.hasClass('mutil')
                mutil = true
                maxItems = null

            if $valueDom.hasClass('bool')

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
                    }
                })

            if $valueDom.hasClass('option')

                $valueDom.selectize({
                    multi: mutil,
                    maxItems: maxItems,
                    persist: false,
                    create: false,
                    openOnFocus: false,
                    plugins: ['custom_selection']
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

        # , 1

    $(document).on 'change', 'select.value', (event) ->

        console.log($(event.target).getValue())

    $('.property').html($('#dom').html())