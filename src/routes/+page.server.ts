import type { PageServerLoad } from './$types';

function getAge(dateString: string): number {
		let today = new Date();
		let birthDate = new Date(dateString);
		let age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}

		return age;
	}

export const load: PageServerLoad = async () => {
	return {
		age: getAge("2006-09-05")
	};
};
