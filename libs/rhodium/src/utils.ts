export const stringifyError = function <T extends Error>(
	err: T,
): Record<keyof T, any> {
	var plainObject: any = {};
	Object.getOwnPropertyNames(err).forEach(function (key) {
		plainObject[key] = (err as any)[key];
	});
	return plainObject;
};
