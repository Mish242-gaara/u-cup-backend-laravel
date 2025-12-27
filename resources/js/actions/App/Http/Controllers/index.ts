import Auth from './Auth'
import Frontend from './Frontend'
import Admin from './Admin'
import ThemeController from './ThemeController'
import Api from './Api'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
Frontend: Object.assign(Frontend, Frontend),
Admin: Object.assign(Admin, Admin),
ThemeController: Object.assign(ThemeController, ThemeController),
Api: Object.assign(Api, Api),
}

export default Controllers