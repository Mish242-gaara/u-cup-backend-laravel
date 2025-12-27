import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \PasswordController::update
 * @see [unknown]:0
 * @route '/api/settings/password'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/api/settings/password',
} satisfies RouteDefinition<["post"]>

/**
* @see \PasswordController::update
 * @see [unknown]:0
 * @route '/api/settings/password'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \PasswordController::update
 * @see [unknown]:0
 * @route '/api/settings/password'
 */
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

    /**
* @see \PasswordController::update
 * @see [unknown]:0
 * @route '/api/settings/password'
 */
    const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(options),
        method: 'post',
    })

            /**
* @see \PasswordController::update
 * @see [unknown]:0
 * @route '/api/settings/password'
 */
        updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(options),
            method: 'post',
        })
    
    update.form = updateForm
const PasswordController = { update }

export default PasswordController