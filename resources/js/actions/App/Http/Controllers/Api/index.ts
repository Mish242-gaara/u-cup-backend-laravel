import MatchController from './MatchController'
import RealTimeMatchController from './RealTimeMatchController'
import SseMatchController from './SseMatchController'
import MatchTimerController from './MatchTimerController'
const Api = {
    MatchController: Object.assign(MatchController, MatchController),
RealTimeMatchController: Object.assign(RealTimeMatchController, RealTimeMatchController),
SseMatchController: Object.assign(SseMatchController, SseMatchController),
MatchTimerController: Object.assign(MatchTimerController, MatchTimerController),
}

export default Api