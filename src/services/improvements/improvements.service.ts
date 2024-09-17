import axios from '../../utils/axios';
import { IBuyImprovementData } from './improvements.interface';

const IMPROVEMENTS = 'improvements';

class ImprovementsService {
	async getImprovements() {
		const { data } = await axios.get(IMPROVEMENTS);

		return data;
	}

	async buyImprovement(data: IBuyImprovementData) {
		const response = await axios.post(`${IMPROVEMENTS}/buy-improvement`, data);

		return response.data;
	}
}

export default new ImprovementsService();
