import { combineReducers } from '@reduxjs/toolkit';
import AnimationsReducer from './animations/animations.slice';
import DrawerReducer from './drawer/drawer.slice';
import ModalReducer from './modal/modal.slice';
import UserReducer from './user/user.slice';

const rootReducers = combineReducers({
	user: UserReducer,
	drawer: DrawerReducer,
	modal: ModalReducer,
	animations: AnimationsReducer,
});

export default rootReducers;
