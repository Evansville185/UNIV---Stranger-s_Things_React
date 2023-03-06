import { config } from "../config";

export const getAllPosts = async () => {
	try {
		const response = await fetch(`${config.apiLink}/${config.cohort}/posts`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const userMessages = async (token) => {
	try {
		const response = await fetch(`${config.apiLink}/${config.cohort}/users/me`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
		});
		const result = await response.json();
		console.log(result);
		return result;
	} catch (error) {
		console.error(error);
	}
}