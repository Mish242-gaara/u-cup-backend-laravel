import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\MatchController::index
 * @see app/Http/Controllers/Admin/MatchController.php:22
 * @route '/admin/matches'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/matches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\MatchController::index
 * @see app/Http/Controllers/Admin/MatchController.php:22
 * @route '/admin/matches'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchController::index
 * @see app/Http/Controllers/Admin/MatchController.php:22
 * @route '/admin/matches'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\MatchController::index
 * @see app/Http/Controllers/Admin/MatchController.php:22
 * @route '/admin/matches'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\MatchController::index
 * @see app/Http/Controllers/Admin/MatchController.php:22
 * @route '/admin/matches'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchController::index
 * @see app/Http/Controllers/Admin/MatchController.php:22
 * @route '/admin/matches'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\MatchController::index
 * @see app/Http/Controllers/Admin/MatchController.php:22
 * @route '/admin/matches'
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
* @see \App\Http\Controllers\Admin\MatchController::create
 * @see app/Http/Controllers/Admin/MatchController.php:39
 * @route '/admin/matches/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/matches/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\MatchController::create
 * @see app/Http/Controllers/Admin/MatchController.php:39
 * @route '/admin/matches/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchController::create
 * @see app/Http/Controllers/Admin/MatchController.php:39
 * @route '/admin/matches/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\MatchController::create
 * @see app/Http/Controllers/Admin/MatchController.php:39
 * @route '/admin/matches/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\MatchController::create
 * @see app/Http/Controllers/Admin/MatchController.php:39
 * @route '/admin/matches/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchController::create
 * @see app/Http/Controllers/Admin/MatchController.php:39
 * @route '/admin/matches/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\MatchController::create
 * @see app/Http/Controllers/Admin/MatchController.php:39
 * @route '/admin/matches/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Admin\MatchController::store
 * @see app/Http/Controllers/Admin/MatchController.php:49
 * @route '/admin/matches'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/matches',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchController::store
 * @see app/Http/Controllers/Admin/MatchController.php:49
 * @route '/admin/matches'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchController::store
 * @see app/Http/Controllers/Admin/MatchController.php:49
 * @route '/admin/matches'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchController::store
 * @see app/Http/Controllers/Admin/MatchController.php:49
 * @route '/admin/matches'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchController::store
 * @see app/Http/Controllers/Admin/MatchController.php:49
 * @route '/admin/matches'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\MatchController::show
 * @see app/Http/Controllers/Admin/MatchController.php:0
 * @route '/admin/matches/{match}'
 */
export const show = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/matches/{match}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\MatchController::show
 * @see app/Http/Controllers/Admin/MatchController.php:0
 * @route '/admin/matches/{match}'
 */
show.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchController::show
 * @see app/Http/Controllers/Admin/MatchController.php:0
 * @route '/admin/matches/{match}'
 */
show.get = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\MatchController::show
 * @see app/Http/Controllers/Admin/MatchController.php:0
 * @route '/admin/matches/{match}'
 */
show.head = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\MatchController::show
 * @see app/Http/Controllers/Admin/MatchController.php:0
 * @route '/admin/matches/{match}'
 */
    const showForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchController::show
 * @see app/Http/Controllers/Admin/MatchController.php:0
 * @route '/admin/matches/{match}'
 */
        showForm.get = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\MatchController::show
 * @see app/Http/Controllers/Admin/MatchController.php:0
 * @route '/admin/matches/{match}'
 */
        showForm.head = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\MatchController::edit
 * @see app/Http/Controllers/Admin/MatchController.php:69
 * @route '/admin/matches/{match}/edit'
 */
export const edit = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/matches/{match}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\MatchController::edit
 * @see app/Http/Controllers/Admin/MatchController.php:69
 * @route '/admin/matches/{match}/edit'
 */
edit.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchController::edit
 * @see app/Http/Controllers/Admin/MatchController.php:69
 * @route '/admin/matches/{match}/edit'
 */
edit.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\MatchController::edit
 * @see app/Http/Controllers/Admin/MatchController.php:69
 * @route '/admin/matches/{match}/edit'
 */
edit.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\MatchController::edit
 * @see app/Http/Controllers/Admin/MatchController.php:69
 * @route '/admin/matches/{match}/edit'
 */
    const editForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchController::edit
 * @see app/Http/Controllers/Admin/MatchController.php:69
 * @route '/admin/matches/{match}/edit'
 */
        editForm.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\MatchController::edit
 * @see app/Http/Controllers/Admin/MatchController.php:69
 * @route '/admin/matches/{match}/edit'
 */
        editForm.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Admin\MatchController::update
 * @see app/Http/Controllers/Admin/MatchController.php:79
 * @route '/admin/matches/{match}'
 */
export const update = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/matches/{match}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\MatchController::update
 * @see app/Http/Controllers/Admin/MatchController.php:79
 * @route '/admin/matches/{match}'
 */
update.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchController::update
 * @see app/Http/Controllers/Admin/MatchController.php:79
 * @route '/admin/matches/{match}'
 */
update.put = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\MatchController::update
 * @see app/Http/Controllers/Admin/MatchController.php:79
 * @route '/admin/matches/{match}'
 */
update.patch = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\MatchController::update
 * @see app/Http/Controllers/Admin/MatchController.php:79
 * @route '/admin/matches/{match}'
 */
    const updateForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchController::update
 * @see app/Http/Controllers/Admin/MatchController.php:79
 * @route '/admin/matches/{match}'
 */
        updateForm.put = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\MatchController::update
 * @see app/Http/Controllers/Admin/MatchController.php:79
 * @route '/admin/matches/{match}'
 */
        updateForm.patch = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\MatchController::destroy
 * @see app/Http/Controllers/Admin/MatchController.php:410
 * @route '/admin/matches/{match}'
 */
export const destroy = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/matches/{match}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\MatchController::destroy
 * @see app/Http/Controllers/Admin/MatchController.php:410
 * @route '/admin/matches/{match}'
 */
destroy.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchController::destroy
 * @see app/Http/Controllers/Admin/MatchController.php:410
 * @route '/admin/matches/{match}'
 */
destroy.delete = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\MatchController::destroy
 * @see app/Http/Controllers/Admin/MatchController.php:410
 * @route '/admin/matches/{match}'
 */
    const destroyForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchController::destroy
 * @see app/Http/Controllers/Admin/MatchController.php:410
 * @route '/admin/matches/{match}'
 */
        destroyForm.delete = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Admin\MatchController::duplicate
 * @see app/Http/Controllers/Admin/MatchController.php:0
 * @route '/admin/matches/{match}/duplicate'
 */
export const duplicate = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: duplicate.url(args, options),
    method: 'post',
})

duplicate.definition = {
    methods: ["post"],
    url: '/admin/matches/{match}/duplicate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchController::duplicate
 * @see app/Http/Controllers/Admin/MatchController.php:0
 * @route '/admin/matches/{match}/duplicate'
 */
duplicate.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return duplicate.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchController::duplicate
 * @see app/Http/Controllers/Admin/MatchController.php:0
 * @route '/admin/matches/{match}/duplicate'
 */
duplicate.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: duplicate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchController::duplicate
 * @see app/Http/Controllers/Admin/MatchController.php:0
 * @route '/admin/matches/{match}/duplicate'
 */
    const duplicateForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: duplicate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchController::duplicate
 * @see app/Http/Controllers/Admin/MatchController.php:0
 * @route '/admin/matches/{match}/duplicate'
 */
        duplicateForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: duplicate.url(args, options),
            method: 'post',
        })
    
    duplicate.form = duplicateForm
/**
* @see \App\Http\Controllers\Admin\MatchController::lineup
 * @see app/Http/Controllers/Admin/MatchController.php:244
 * @route '/admin/matches/{match}/lineup'
 */
export const lineup = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lineup.url(args, options),
    method: 'get',
})

lineup.definition = {
    methods: ["get","head"],
    url: '/admin/matches/{match}/lineup',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\MatchController::lineup
 * @see app/Http/Controllers/Admin/MatchController.php:244
 * @route '/admin/matches/{match}/lineup'
 */
lineup.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return lineup.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchController::lineup
 * @see app/Http/Controllers/Admin/MatchController.php:244
 * @route '/admin/matches/{match}/lineup'
 */
lineup.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: lineup.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\MatchController::lineup
 * @see app/Http/Controllers/Admin/MatchController.php:244
 * @route '/admin/matches/{match}/lineup'
 */
lineup.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: lineup.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\MatchController::lineup
 * @see app/Http/Controllers/Admin/MatchController.php:244
 * @route '/admin/matches/{match}/lineup'
 */
    const lineupForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: lineup.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchController::lineup
 * @see app/Http/Controllers/Admin/MatchController.php:244
 * @route '/admin/matches/{match}/lineup'
 */
        lineupForm.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lineup.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\MatchController::lineup
 * @see app/Http/Controllers/Admin/MatchController.php:244
 * @route '/admin/matches/{match}/lineup'
 */
        lineupForm.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: lineup.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    lineup.form = lineupForm
/**
* @see \App\Http\Controllers\Admin\MatchController::storeLineup
 * @see app/Http/Controllers/Admin/MatchController.php:293
 * @route '/admin/matches/{match}/lineup'
 */
export const storeLineup = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeLineup.url(args, options),
    method: 'post',
})

storeLineup.definition = {
    methods: ["post"],
    url: '/admin/matches/{match}/lineup',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchController::storeLineup
 * @see app/Http/Controllers/Admin/MatchController.php:293
 * @route '/admin/matches/{match}/lineup'
 */
storeLineup.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return storeLineup.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchController::storeLineup
 * @see app/Http/Controllers/Admin/MatchController.php:293
 * @route '/admin/matches/{match}/lineup'
 */
storeLineup.post = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeLineup.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchController::storeLineup
 * @see app/Http/Controllers/Admin/MatchController.php:293
 * @route '/admin/matches/{match}/lineup'
 */
    const storeLineupForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storeLineup.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchController::storeLineup
 * @see app/Http/Controllers/Admin/MatchController.php:293
 * @route '/admin/matches/{match}/lineup'
 */
        storeLineupForm.post = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storeLineup.url(args, options),
            method: 'post',
        })
    
    storeLineup.form = storeLineupForm
const MatchController = { index, create, store, show, edit, update, destroy, duplicate, lineup, storeLineup }

export default MatchController