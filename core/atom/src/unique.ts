export default function $unique(length?: number): string {
	if (!length) {
		return (
			(+new Date()).toString(16).slice(2) +
			Math.random().toString(16).slice(2)
		);
	} else {
		let res = '';

		while (length > 0) {
			res +=
				(+new Date()).toString(16).slice(2) +
				Math.random().toString(16).slice(2);
			length--;
		}

		return res;
	}
}
