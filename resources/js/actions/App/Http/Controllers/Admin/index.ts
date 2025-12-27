import DashboardController from './DashboardController'
import UniversityController from './UniversityController'
import TeamController from './TeamController'
import PlayerController from './PlayerController'
import MatchController from './MatchController'
import MatchEventController from './MatchEventController'
import LiveMatchController from './LiveMatchController'
import MatchTimerController from './MatchTimerController'
import StandingAdminController from './StandingAdminController'
import UserController from './UserController'
import GalleryController from './GalleryController'
import ManualStatsController from './ManualStatsController'
const Admin = {
    DashboardController: Object.assign(DashboardController, DashboardController),
UniversityController: Object.assign(UniversityController, UniversityController),
TeamController: Object.assign(TeamController, TeamController),
PlayerController: Object.assign(PlayerController, PlayerController),
MatchController: Object.assign(MatchController, MatchController),
MatchEventController: Object.assign(MatchEventController, MatchEventController),
LiveMatchController: Object.assign(LiveMatchController, LiveMatchController),
MatchTimerController: Object.assign(MatchTimerController, MatchTimerController),
StandingAdminController: Object.assign(StandingAdminController, StandingAdminController),
UserController: Object.assign(UserController, UserController),
GalleryController: Object.assign(GalleryController, GalleryController),
ManualStatsController: Object.assign(ManualStatsController, ManualStatsController),
}

export default Admin