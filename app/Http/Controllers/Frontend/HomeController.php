<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\MatchModel;
use App\Models\Standing;
use App\Models\Player;
use App\Models\Team;
use Carbon\Carbon;

class HomeController extends Controller
{
    public function index()
    {
        // 1. Récupérer les matchs en direct
        $liveMatches = MatchModel::where('status', 'live')
            ->with(['homeTeam.university', 'awayTeam.university'])
            ->orderByDesc('start_time')
            ->limit(5)
            ->get();

        // 2. Récupérer les matchs du jour à venir
        $todayUpcomingMatches = MatchModel::whereDate('match_date', today())
            ->where('status', '!=', 'live')
            ->with(['homeTeam.university', 'awayTeam.university'])
            ->orderBy('match_date', 'asc')
            ->limit(5)
            ->get();

        // 3. Récupérer les prochains matchs (après aujourd'hui)
        $upcomingMatches = MatchModel::whereDate('match_date', '>', today())
            ->where('status', '!=', 'completed')
            ->with(['homeTeam.university', 'awayTeam.university'])
            ->orderBy('match_date', 'asc')
            ->limit(5)
            ->get();

        // 4. Récupérer les matchs passés
        $recentMatches = MatchModel::where('status', 'completed')
            ->with(['homeTeam.university', 'awayTeam.university'])
            ->orderByDesc('match_date')
            ->limit(5)
            ->get();

        // 5. Récupérer le classement
        $standings = Standing::with('team.university')
            ->orderByDesc('points')
            ->orderByDesc('goal_difference')
            ->limit(5)
            ->get();

        // 6. Récupérer les meilleurs buteurs (seulement ceux avec au moins 1 but)
        $topScorers = Player::with('team.university')
            ->where('goals', '>', 0)
            ->orderByDesc('goals')
            ->limit(8)
            ->get();

        // 7. Statistiques globales
        $stats = [
            'totalMatches' => MatchModel::count(),
            'liveMatches' => MatchModel::where('status', 'live')->count(),
            'teams' => Team::count(),
            'players' => Player::count(),
        ];

        return view('frontend.home', [
            'liveMatches' => $liveMatches,
            'todayUpcomingMatches' => $todayUpcomingMatches,
            'upcomingMatches' => $upcomingMatches,
            'recentMatches' => $recentMatches,
            'standings' => $standings,
            'topScorers' => $topScorers,
            'stats' => $stats,
        ]);
    }
}