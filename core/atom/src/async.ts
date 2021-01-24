export const wait = function <T>(time: number, data?: T): Promise<T> {
	return new Promise((resolve) => {
		setTimeout(() => {
			// @ts-ignore
			resolve(data);
		}, time);
	});
};
