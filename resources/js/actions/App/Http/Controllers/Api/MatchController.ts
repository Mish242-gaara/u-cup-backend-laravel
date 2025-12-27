import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\MatchController::liveUpdate
 * @see app/Http/Controllers/Api/MatchController.php:17
 * @route '/api/matches/{match}/live-update'
 */
export const liveUpdate = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: liveUpdate.url(args, options),
    method: 'get',
})

liveUpdate.definition = {
    methods: ["get","head"],
    url: '/api/matches/{match}/live-update',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MatchController::liveUpdate
 * @see app/Http/Controllers/Api/MatchController.php:17
 * @route '/api/matches/{match}/live-update'
 */
liveUpdate.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return liveUpdate.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MatchController::liveUpdate
 * @see app/Http/Controllers/Api/MatchController.php:17
 * @route '/api/matches/{match}/live-update'
 */
liveUpdate.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: liveUpdate.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\MatchController::liveUpdate
 * @see app/Http/Controllers/Api/MatchController.php:17
 * @route '/api/matches/{match}/live-update'
 */
liveUpdate.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: liveUpdate.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\MatchController::liveUpdate
 * @see app/Http/Controllers/Api/MatchController.php:17
 * @route '/api/matches/{match}/live-update'
 */
    const liveUpdateForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: liveUpdate.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\MatchController::liveUpdate
 * @see app/Http/Controllers/Api/MatchController.php:17
 * @route '/api/matches/{match}/live-update'
 */
        liveUpdateForm.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: liveUpdate.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\MatchController::liveUpdate
 * @see app/Http/Controllers/Api/MatchController.php:17
 * @route '/api/matches/{match}/live-update'
 */
        liveUpdateForm.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: liveUpdate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    liveUpdate.form = liveUpdateForm
/**
* @see \App\Http\Controllers\Api\MatchController::timeline
 * @see app/Http/Controllers/Api/MatchController.php:133
 * @route '/api/matches/{match}/timeline'
 */
export const timeline = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: timeline.url(args, options),
    method: 'get',
})

timeline.definition = {
    methods: ["get","head"],
    url: '/api/matches/{match}/timeline',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MatchController::timeline
 * @see app/Http/Controllers/Api/MatchController.php:133
 * @route '/api/matches/{match}/timeline'
 */
timeline.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return timeline.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MatchController::timeline
 * @see app/Http/Controllers/Api/MatchController.php:133
 * @route '/api/matches/{match}/timeline'
 */
timeline.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: timeline.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\MatchController::timeline
 * @see app/Http/Controllers/Api/MatchController.php:133
 * @route '/api/matches/{match}/timeline'
 */
timeline.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: timeline.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\MatchController::timeline
 * @see app/Http/Controllers/Api/MatchController.php:133
 * @route '/api/matches/{match}/timeline'
 */
    const timelineForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: timeline.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\MatchController::timeline
 * @see app/Http/Controllers/Api/MatchController.php:133
 * @route '/api/matches/{match}/timeline'
 */
        timelineForm.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: timeline.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\MatchController::timeline
 * @see app/Http/Controllers/Api/MatchController.php:133
 * @route '/api/matches/{match}/timeline'
 */
        timelineForm.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: timeline.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    timeline.form = timelineForm
const MatchController = { liveUpdate, timeline }

export default MatchController