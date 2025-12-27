import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\RealTimeMatchController::getLiveData
 * @see app/Http/Controllers/Api/RealTimeMatchController.php:23
 * @route '/api/matches/{match}/realtime'
 */
export const getLiveData = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getLiveData.url(args, options),
    method: 'get',
})

getLiveData.definition = {
    methods: ["get","head"],
    url: '/api/matches/{match}/realtime',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\RealTimeMatchController::getLiveData
 * @see app/Http/Controllers/Api/RealTimeMatchController.php:23
 * @route '/api/matches/{match}/realtime'
 */
getLiveData.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getLiveData.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RealTimeMatchController::getLiveData
 * @see app/Http/Controllers/Api/RealTimeMatchController.php:23
 * @route '/api/matches/{match}/realtime'
 */
getLiveData.get = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getLiveData.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\RealTimeMatchController::getLiveData
 * @see app/Http/Controllers/Api/RealTimeMatchController.php:23
 * @route '/api/matches/{match}/realtime'
 */
getLiveData.head = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getLiveData.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\RealTimeMatchController::getLiveData
 * @see app/Http/Controllers/Api/RealTimeMatchController.php:23
 * @route '/api/matches/{match}/realtime'
 */
    const getLiveDataForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getLiveData.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\RealTimeMatchController::getLiveData
 * @see app/Http/Controllers/Api/RealTimeMatchController.php:23
 * @route '/api/matches/{match}/realtime'
 */
        getLiveDataForm.get = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getLiveData.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\RealTimeMatchController::getLiveData
 * @see app/Http/Controllers/Api/RealTimeMatchController.php:23
 * @route '/api/matches/{match}/realtime'
 */
        getLiveDataForm.head = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getLiveData.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getLiveData.form = getLiveDataForm
const RealTimeMatchController = { getLiveData }

export default RealTimeMatchController