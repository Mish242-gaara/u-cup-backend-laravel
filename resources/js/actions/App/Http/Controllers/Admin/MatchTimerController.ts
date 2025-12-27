import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::startTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:14
 * @route '/admin/match-timer/{match}/start'
 */
export const startTimer = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: startTimer.url(args, options),
    method: 'post',
})

startTimer.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::startTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:14
 * @route '/admin/match-timer/{match}/start'
 */
startTimer.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return startTimer.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::startTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:14
 * @route '/admin/match-timer/{match}/start'
 */
startTimer.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: startTimer.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::startTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:14
 * @route '/admin/match-timer/{match}/start'
 */
    const startTimerForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: startTimer.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::startTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:14
 * @route '/admin/match-timer/{match}/start'
 */
        startTimerForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: startTimer.url(args, options),
            method: 'post',
        })
    
    startTimer.form = startTimerForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::pauseTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:27
 * @route '/admin/match-timer/{match}/pause'
 */
export const pauseTimer = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: pauseTimer.url(args, options),
    method: 'post',
})

pauseTimer.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/pause',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::pauseTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:27
 * @route '/admin/match-timer/{match}/pause'
 */
pauseTimer.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return pauseTimer.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::pauseTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:27
 * @route '/admin/match-timer/{match}/pause'
 */
pauseTimer.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: pauseTimer.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::pauseTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:27
 * @route '/admin/match-timer/{match}/pause'
 */
    const pauseTimerForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: pauseTimer.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::pauseTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:27
 * @route '/admin/match-timer/{match}/pause'
 */
        pauseTimerForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: pauseTimer.url(args, options),
            method: 'post',
        })
    
    pauseTimer.form = pauseTimerForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::resumeTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:39
 * @route '/admin/match-timer/{match}/resume'
 */
export const resumeTimer = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resumeTimer.url(args, options),
    method: 'post',
})

resumeTimer.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/resume',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::resumeTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:39
 * @route '/admin/match-timer/{match}/resume'
 */
resumeTimer.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return resumeTimer.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::resumeTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:39
 * @route '/admin/match-timer/{match}/resume'
 */
resumeTimer.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resumeTimer.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::resumeTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:39
 * @route '/admin/match-timer/{match}/resume'
 */
    const resumeTimerForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: resumeTimer.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::resumeTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:39
 * @route '/admin/match-timer/{match}/resume'
 */
        resumeTimerForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: resumeTimer.url(args, options),
            method: 'post',
        })
    
    resumeTimer.form = resumeTimerForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::stopTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:51
 * @route '/admin/match-timer/{match}/stop'
 */
export const stopTimer = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stopTimer.url(args, options),
    method: 'post',
})

stopTimer.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/stop',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::stopTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:51
 * @route '/admin/match-timer/{match}/stop'
 */
stopTimer.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return stopTimer.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::stopTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:51
 * @route '/admin/match-timer/{match}/stop'
 */
stopTimer.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stopTimer.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::stopTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:51
 * @route '/admin/match-timer/{match}/stop'
 */
    const stopTimerForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: stopTimer.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::stopTimer
 * @see app/Http/Controllers/Admin/MatchTimerController.php:51
 * @route '/admin/match-timer/{match}/stop'
 */
        stopTimerForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: stopTimer.url(args, options),
            method: 'post',
        })
    
    stopTimer.form = stopTimerForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::addAdditionalTimeFirstHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:64
 * @route '/admin/match-timer/{match}/additional-time-first-half'
 */
export const addAdditionalTimeFirstHalf = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addAdditionalTimeFirstHalf.url(args, options),
    method: 'post',
})

addAdditionalTimeFirstHalf.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/additional-time-first-half',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::addAdditionalTimeFirstHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:64
 * @route '/admin/match-timer/{match}/additional-time-first-half'
 */
addAdditionalTimeFirstHalf.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return addAdditionalTimeFirstHalf.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::addAdditionalTimeFirstHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:64
 * @route '/admin/match-timer/{match}/additional-time-first-half'
 */
addAdditionalTimeFirstHalf.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addAdditionalTimeFirstHalf.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::addAdditionalTimeFirstHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:64
 * @route '/admin/match-timer/{match}/additional-time-first-half'
 */
    const addAdditionalTimeFirstHalfForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: addAdditionalTimeFirstHalf.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::addAdditionalTimeFirstHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:64
 * @route '/admin/match-timer/{match}/additional-time-first-half'
 */
        addAdditionalTimeFirstHalfForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: addAdditionalTimeFirstHalf.url(args, options),
            method: 'post',
        })
    
    addAdditionalTimeFirstHalf.form = addAdditionalTimeFirstHalfForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::addAdditionalTimeSecondHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:79
 * @route '/admin/match-timer/{match}/additional-time-second-half'
 */
export const addAdditionalTimeSecondHalf = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addAdditionalTimeSecondHalf.url(args, options),
    method: 'post',
})

addAdditionalTimeSecondHalf.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/additional-time-second-half',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::addAdditionalTimeSecondHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:79
 * @route '/admin/match-timer/{match}/additional-time-second-half'
 */
addAdditionalTimeSecondHalf.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return addAdditionalTimeSecondHalf.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::addAdditionalTimeSecondHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:79
 * @route '/admin/match-timer/{match}/additional-time-second-half'
 */
addAdditionalTimeSecondHalf.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addAdditionalTimeSecondHalf.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::addAdditionalTimeSecondHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:79
 * @route '/admin/match-timer/{match}/additional-time-second-half'
 */
    const addAdditionalTimeSecondHalfForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: addAdditionalTimeSecondHalf.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::addAdditionalTimeSecondHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:79
 * @route '/admin/match-timer/{match}/additional-time-second-half'
 */
        addAdditionalTimeSecondHalfForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: addAdditionalTimeSecondHalf.url(args, options),
            method: 'post',
        })
    
    addAdditionalTimeSecondHalf.form = addAdditionalTimeSecondHalfForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::enableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:94
 * @route '/admin/match-timer/{match}/enable-extra-time'
 */
export const enableExtraTime = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableExtraTime.url(args, options),
    method: 'post',
})

enableExtraTime.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/enable-extra-time',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::enableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:94
 * @route '/admin/match-timer/{match}/enable-extra-time'
 */
enableExtraTime.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return enableExtraTime.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::enableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:94
 * @route '/admin/match-timer/{match}/enable-extra-time'
 */
enableExtraTime.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableExtraTime.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::enableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:94
 * @route '/admin/match-timer/{match}/enable-extra-time'
 */
    const enableExtraTimeForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: enableExtraTime.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::enableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:94
 * @route '/admin/match-timer/{match}/enable-extra-time'
 */
        enableExtraTimeForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: enableExtraTime.url(args, options),
            method: 'post',
        })
    
    enableExtraTime.form = enableExtraTimeForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::disableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:105
 * @route '/admin/match-timer/{match}/disable-extra-time'
 */
export const disableExtraTime = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: disableExtraTime.url(args, options),
    method: 'post',
})

disableExtraTime.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/disable-extra-time',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::disableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:105
 * @route '/admin/match-timer/{match}/disable-extra-time'
 */
disableExtraTime.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return disableExtraTime.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::disableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:105
 * @route '/admin/match-timer/{match}/disable-extra-time'
 */
disableExtraTime.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: disableExtraTime.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::disableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:105
 * @route '/admin/match-timer/{match}/disable-extra-time'
 */
    const disableExtraTimeForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: disableExtraTime.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::disableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:105
 * @route '/admin/match-timer/{match}/disable-extra-time'
 */
        disableExtraTimeForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: disableExtraTime.url(args, options),
            method: 'post',
        })
    
    disableExtraTime.form = disableExtraTimeForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::enablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:116
 * @route '/admin/match-timer/{match}/enable-penalty-shootout'
 */
export const enablePenaltyShootout = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enablePenaltyShootout.url(args, options),
    method: 'post',
})

enablePenaltyShootout.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/enable-penalty-shootout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::enablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:116
 * @route '/admin/match-timer/{match}/enable-penalty-shootout'
 */
enablePenaltyShootout.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return enablePenaltyShootout.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::enablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:116
 * @route '/admin/match-timer/{match}/enable-penalty-shootout'
 */
enablePenaltyShootout.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enablePenaltyShootout.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::enablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:116
 * @route '/admin/match-timer/{match}/enable-penalty-shootout'
 */
    const enablePenaltyShootoutForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: enablePenaltyShootout.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::enablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:116
 * @route '/admin/match-timer/{match}/enable-penalty-shootout'
 */
        enablePenaltyShootoutForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: enablePenaltyShootout.url(args, options),
            method: 'post',
        })
    
    enablePenaltyShootout.form = enablePenaltyShootoutForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::disablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:127
 * @route '/admin/match-timer/{match}/disable-penalty-shootout'
 */
export const disablePenaltyShootout = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: disablePenaltyShootout.url(args, options),
    method: 'post',
})

disablePenaltyShootout.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/disable-penalty-shootout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::disablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:127
 * @route '/admin/match-timer/{match}/disable-penalty-shootout'
 */
disablePenaltyShootout.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return disablePenaltyShootout.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::disablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:127
 * @route '/admin/match-timer/{match}/disable-penalty-shootout'
 */
disablePenaltyShootout.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: disablePenaltyShootout.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::disablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:127
 * @route '/admin/match-timer/{match}/disable-penalty-shootout'
 */
    const disablePenaltyShootoutForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: disablePenaltyShootout.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::disablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:127
 * @route '/admin/match-timer/{match}/disable-penalty-shootout'
 */
        disablePenaltyShootoutForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: disablePenaltyShootout.url(args, options),
            method: 'post',
        })
    
    disablePenaltyShootout.form = disablePenaltyShootoutForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::getElapsedTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:138
 * @route '/admin/match-timer/{match}/elapsed-time'
 */
export const getElapsedTime = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getElapsedTime.url(args, options),
    method: 'get',
})

getElapsedTime.definition = {
    methods: ["get","head"],
    url: '/admin/match-timer/{match}/elapsed-time',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::getElapsedTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:138
 * @route '/admin/match-timer/{match}/elapsed-time'
 */
getElapsedTime.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return getElapsedTime.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::getElapsedTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:138
 * @route '/admin/match-timer/{match}/elapsed-time'
 */
getElapsedTime.get = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getElapsedTime.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::getElapsedTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:138
 * @route '/admin/match-timer/{match}/elapsed-time'
 */
getElapsedTime.head = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getElapsedTime.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::getElapsedTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:138
 * @route '/admin/match-timer/{match}/elapsed-time'
 */
    const getElapsedTimeForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getElapsedTime.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::getElapsedTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:138
 * @route '/admin/match-timer/{match}/elapsed-time'
 */
        getElapsedTimeForm.get = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getElapsedTime.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::getElapsedTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:138
 * @route '/admin/match-timer/{match}/elapsed-time'
 */
        getElapsedTimeForm.head = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getElapsedTime.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getElapsedTime.form = getElapsedTimeForm
const MatchTimerController = { startTimer, pauseTimer, resumeTimer, stopTimer, addAdditionalTimeFirstHalf, addAdditionalTimeSecondHalf, enableExtraTime, disableExtraTime, enablePenaltyShootout, disablePenaltyShootout, getElapsedTime }

export default MatchTimerController