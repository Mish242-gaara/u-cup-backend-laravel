import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::index
 * @see app/Http/Controllers/Admin/LiveMatchController.php:23
 * @route '/admin/live'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/live',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::index
 * @see app/Http/Controllers/Admin/LiveMatchController.php:23
 * @route '/admin/live'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::index
 * @see app/Http/Controllers/Admin/LiveMatchController.php:23
 * @route '/admin/live'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::index
 * @see app/Http/Controllers/Admin/LiveMatchController.php:23
 * @route '/admin/live'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\LiveMatchController::index
 * @see app/Http/Controllers/Admin/LiveMatchController.php:23
 * @route '/admin/live'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::index
 * @see app/Http/Controllers/Admin/LiveMatchController.php:23
 * @route '/admin/live'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::index
 * @see app/Http/Controllers/Admin/LiveMatchController.php:23
 * @route '/admin/live'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::show
 * @see app/Http/Controllers/Admin/LiveMatchController.php:59
 * @route '/admin/live/match/{match}'
 */
export const show = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/live/match/{match}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::show
 * @see app/Http/Controllers/Admin/LiveMatchController.php:59
 * @route '/admin/live/match/{match}'
 */
show.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { match: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: typeof args.match === 'object'
                ? args.match.id
                : args.match,
                }

    return show.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::show
 * @see app/Http/Controllers/Admin/LiveMatchController.php:59
 * @route '/admin/live/match/{match}'
 */
show.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::show
 * @see app/Http/Controllers/Admin/LiveMatchController.php:59
 * @route '/admin/live/match/{match}'
 */
show.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\LiveMatchController::show
 * @see app/Http/Controllers/Admin/LiveMatchController.php:59
 * @route '/admin/live/match/{match}'
 */
    const showForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::show
 * @see app/Http/Controllers/Admin/LiveMatchController.php:59
 * @route '/admin/live/match/{match}'
 */
        showForm.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::show
 * @see app/Http/Controllers/Admin/LiveMatchController.php:59
 * @route '/admin/live/match/{match}'
 */
        showForm.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::updateStats
 * @see app/Http/Controllers/Admin/LiveMatchController.php:195
 * @route '/admin/live/match/{match}/update-stats'
 */
export const updateStats = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateStats.url(args, options),
    method: 'post',
})

updateStats.definition = {
    methods: ["post"],
    url: '/admin/live/match/{match}/update-stats',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::updateStats
 * @see app/Http/Controllers/Admin/LiveMatchController.php:195
 * @route '/admin/live/match/{match}/update-stats'
 */
updateStats.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { match: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: typeof args.match === 'object'
                ? args.match.id
                : args.match,
                }

    return updateStats.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::updateStats
 * @see app/Http/Controllers/Admin/LiveMatchController.php:195
 * @route '/admin/live/match/{match}/update-stats'
 */
updateStats.post = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateStats.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\LiveMatchController::updateStats
 * @see app/Http/Controllers/Admin/LiveMatchController.php:195
 * @route '/admin/live/match/{match}/update-stats'
 */
    const updateStatsForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateStats.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::updateStats
 * @see app/Http/Controllers/Admin/LiveMatchController.php:195
 * @route '/admin/live/match/{match}/update-stats'
 */
        updateStatsForm.post = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateStats.url(args, options),
            method: 'post',
        })
    
    updateStats.form = updateStatsForm
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::updateStatus
 * @see app/Http/Controllers/Admin/LiveMatchController.php:142
 * @route '/admin/live/status/{match}'
 */
export const updateStatus = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateStatus.url(args, options),
    method: 'post',
})

updateStatus.definition = {
    methods: ["post"],
    url: '/admin/live/status/{match}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::updateStatus
 * @see app/Http/Controllers/Admin/LiveMatchController.php:142
 * @route '/admin/live/status/{match}'
 */
updateStatus.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { match: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: typeof args.match === 'object'
                ? args.match.id
                : args.match,
                }

    return updateStatus.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::updateStatus
 * @see app/Http/Controllers/Admin/LiveMatchController.php:142
 * @route '/admin/live/status/{match}'
 */
updateStatus.post = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateStatus.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\LiveMatchController::updateStatus
 * @see app/Http/Controllers/Admin/LiveMatchController.php:142
 * @route '/admin/live/status/{match}'
 */
    const updateStatusForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateStatus.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::updateStatus
 * @see app/Http/Controllers/Admin/LiveMatchController.php:142
 * @route '/admin/live/status/{match}'
 */
        updateStatusForm.post = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateStatus.url(args, options),
            method: 'post',
        })
    
    updateStatus.form = updateStatusForm
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::addEvent
 * @see app/Http/Controllers/Admin/LiveMatchController.php:253
 * @route '/admin/live/event/{match}'
 */
export const addEvent = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addEvent.url(args, options),
    method: 'post',
})

addEvent.definition = {
    methods: ["post"],
    url: '/admin/live/event/{match}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::addEvent
 * @see app/Http/Controllers/Admin/LiveMatchController.php:253
 * @route '/admin/live/event/{match}'
 */
addEvent.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { match: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: typeof args.match === 'object'
                ? args.match.id
                : args.match,
                }

    return addEvent.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::addEvent
 * @see app/Http/Controllers/Admin/LiveMatchController.php:253
 * @route '/admin/live/event/{match}'
 */
addEvent.post = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addEvent.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\LiveMatchController::addEvent
 * @see app/Http/Controllers/Admin/LiveMatchController.php:253
 * @route '/admin/live/event/{match}'
 */
    const addEventForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: addEvent.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::addEvent
 * @see app/Http/Controllers/Admin/LiveMatchController.php:253
 * @route '/admin/live/event/{match}'
 */
        addEventForm.post = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: addEvent.url(args, options),
            method: 'post',
        })
    
    addEvent.form = addEventForm
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::deleteEvent
 * @see app/Http/Controllers/Admin/LiveMatchController.php:360
 * @route '/admin/live/event/{matchEvent}'
 */
export const deleteEvent = (args: { matchEvent: number | { id: number } } | [matchEvent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteEvent.url(args, options),
    method: 'delete',
})

deleteEvent.definition = {
    methods: ["delete"],
    url: '/admin/live/event/{matchEvent}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::deleteEvent
 * @see app/Http/Controllers/Admin/LiveMatchController.php:360
 * @route '/admin/live/event/{matchEvent}'
 */
deleteEvent.url = (args: { matchEvent: number | { id: number } } | [matchEvent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { matchEvent: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { matchEvent: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    matchEvent: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        matchEvent: typeof args.matchEvent === 'object'
                ? args.matchEvent.id
                : args.matchEvent,
                }

    return deleteEvent.definition.url
            .replace('{matchEvent}', parsedArgs.matchEvent.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::deleteEvent
 * @see app/Http/Controllers/Admin/LiveMatchController.php:360
 * @route '/admin/live/event/{matchEvent}'
 */
deleteEvent.delete = (args: { matchEvent: number | { id: number } } | [matchEvent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteEvent.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\LiveMatchController::deleteEvent
 * @see app/Http/Controllers/Admin/LiveMatchController.php:360
 * @route '/admin/live/event/{matchEvent}'
 */
    const deleteEventForm = (args: { matchEvent: number | { id: number } } | [matchEvent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deleteEvent.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::deleteEvent
 * @see app/Http/Controllers/Admin/LiveMatchController.php:360
 * @route '/admin/live/event/{matchEvent}'
 */
        deleteEventForm.delete = (args: { matchEvent: number | { id: number } } | [matchEvent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deleteEvent.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    deleteEvent.form = deleteEventForm
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::updateLineup
 * @see app/Http/Controllers/Admin/LiveMatchController.php:0
 * @route '/admin/live/lineup/{match}/{team}'
 */
export const updateLineup = (args: { match: string | number, team: string | number } | [match: string | number, team: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateLineup.url(args, options),
    method: 'post',
})

updateLineup.definition = {
    methods: ["post"],
    url: '/admin/live/lineup/{match}/{team}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::updateLineup
 * @see app/Http/Controllers/Admin/LiveMatchController.php:0
 * @route '/admin/live/lineup/{match}/{team}'
 */
updateLineup.url = (args: { match: string | number, team: string | number } | [match: string | number, team: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                    team: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: args.match,
                                team: args.team,
                }

    return updateLineup.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace('{team}', parsedArgs.team.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::updateLineup
 * @see app/Http/Controllers/Admin/LiveMatchController.php:0
 * @route '/admin/live/lineup/{match}/{team}'
 */
updateLineup.post = (args: { match: string | number, team: string | number } | [match: string | number, team: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateLineup.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\LiveMatchController::updateLineup
 * @see app/Http/Controllers/Admin/LiveMatchController.php:0
 * @route '/admin/live/lineup/{match}/{team}'
 */
    const updateLineupForm = (args: { match: string | number, team: string | number } | [match: string | number, team: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateLineup.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::updateLineup
 * @see app/Http/Controllers/Admin/LiveMatchController.php:0
 * @route '/admin/live/lineup/{match}/{team}'
 */
        updateLineupForm.post = (args: { match: string | number, team: string | number } | [match: string | number, team: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateLineup.url(args, options),
            method: 'post',
        })
    
    updateLineup.form = updateLineupForm
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::getPlayers
 * @see app/Http/Controllers/Admin/LiveMatchController.php:45
 * @route '/admin/matches/{match}/players/{team}'
 */
export const getPlayers = (args: { match: number | { id: number }, team: string | number } | [match: number | { id: number }, team: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getPlayers.url(args, options),
    method: 'get',
})

getPlayers.definition = {
    methods: ["get","head"],
    url: '/admin/matches/{match}/players/{team}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::getPlayers
 * @see app/Http/Controllers/Admin/LiveMatchController.php:45
 * @route '/admin/matches/{match}/players/{team}'
 */
getPlayers.url = (args: { match: number | { id: number }, team: string | number } | [match: number | { id: number }, team: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                    team: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: typeof args.match === 'object'
                ? args.match.id
                : args.match,
                                team: args.team,
                }

    return getPlayers.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace('{team}', parsedArgs.team.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::getPlayers
 * @see app/Http/Controllers/Admin/LiveMatchController.php:45
 * @route '/admin/matches/{match}/players/{team}'
 */
getPlayers.get = (args: { match: number | { id: number }, team: string | number } | [match: number | { id: number }, team: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getPlayers.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::getPlayers
 * @see app/Http/Controllers/Admin/LiveMatchController.php:45
 * @route '/admin/matches/{match}/players/{team}'
 */
getPlayers.head = (args: { match: number | { id: number }, team: string | number } | [match: number | { id: number }, team: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getPlayers.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\LiveMatchController::getPlayers
 * @see app/Http/Controllers/Admin/LiveMatchController.php:45
 * @route '/admin/matches/{match}/players/{team}'
 */
    const getPlayersForm = (args: { match: number | { id: number }, team: string | number } | [match: number | { id: number }, team: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getPlayers.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::getPlayers
 * @see app/Http/Controllers/Admin/LiveMatchController.php:45
 * @route '/admin/matches/{match}/players/{team}'
 */
        getPlayersForm.get = (args: { match: number | { id: number }, team: string | number } | [match: number | { id: number }, team: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getPlayers.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::getPlayers
 * @see app/Http/Controllers/Admin/LiveMatchController.php:45
 * @route '/admin/matches/{match}/players/{team}'
 */
        getPlayersForm.head = (args: { match: number | { id: number }, team: string | number } | [match: number | { id: number }, team: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getPlayers.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getPlayers.form = getPlayersForm
const LiveMatchController = { index, show, updateStats, updateStatus, addEvent, deleteEvent, updateLineup, getPlayers }

export default LiveMatchController