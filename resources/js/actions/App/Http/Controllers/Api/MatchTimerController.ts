import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\MatchTimerController::getTimer
 * @see app/Http/Controllers/Api/MatchTimerController.php:12
 * @route '/api/matches/{match}/timer'
 */
export const getTimer = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getTimer.url(args, options),
    method: 'get',
})

getTimer.definition = {
    methods: ["get","head"],
    url: '/api/matches/{match}/timer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\MatchTimerController::getTimer
 * @see app/Http/Controllers/Api/MatchTimerController.php:12
 * @route '/api/matches/{match}/timer'
 */
getTimer.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: args.match,
                }

    return getTimer.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\MatchTimerController::getTimer
 * @see app/Http/Controllers/Api/MatchTimerController.php:12
 * @route '/api/matches/{match}/timer'
 */
getTimer.get = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getTimer.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\MatchTimerController::getTimer
 * @see app/Http/Controllers/Api/MatchTimerController.php:12
 * @route '/api/matches/{match}/timer'
 */
getTimer.head = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getTimer.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\MatchTimerController::getTimer
 * @see app/Http/Controllers/Api/MatchTimerController.php:12
 * @route '/api/matches/{match}/timer'
 */
    const getTimerForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getTimer.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\MatchTimerController::getTimer
 * @see app/Http/Controllers/Api/MatchTimerController.php:12
 * @route '/api/matches/{match}/timer'
 */
        getTimerForm.get = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getTimer.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\MatchTimerController::getTimer
 * @see app/Http/Controllers/Api/MatchTimerController.php:12
 * @route '/api/matches/{match}/timer'
 */
        getTimerForm.head = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getTimer.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getTimer.form = getTimerForm
const MatchTimerController = { getTimer }

export default MatchTimerController