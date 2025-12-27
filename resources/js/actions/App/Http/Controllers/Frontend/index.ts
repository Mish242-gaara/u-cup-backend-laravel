import HomeController from './HomeController'
import GalleryController from './GalleryController'
import MatchController from './MatchController'
import TeamController from './TeamController'
import PlayerController from './PlayerController'
import StandingController from './StandingController'
import PlayerRegistrationController from './PlayerRegistrationController'
const Frontend = {
    HomeController: Object.assign(HomeController, HomeController),
GalleryController: Object.assign(GalleryController, GalleryController),
MatchController: Object.assign(MatchController, MatchController),
TeamController: Object.assign(TeamController, TeamController),
PlayerController: Object.assign(PlayerController, PlayerController),
StandingController: Object.assign(StandingController, StandingController),
PlayerRegistrationController: Object.assign(PlayerRegistrationController, PlayerRegistrationController),
}

export default Frontend