import axios from '../../utils/axios';
import { IInputUser } from './users.interface';

const USERS = 'users';

class UsersService {
	async getMe(data: IInputUser) {
		const user = await axios.post(`auth/auth-telegram`, data);
		localStorage.setItem('token', user.data.token);
		return user.data.user;
	}

	async setInstructioned(data: { uuid: string }) {
		const user = await axios.patch(`${USERS}/set-instructioned`, data);

		return user.data;
	}
}

export default new UsersService();
