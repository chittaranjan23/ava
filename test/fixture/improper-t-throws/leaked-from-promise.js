import test from '../../..';

test('test', t => {
	try {
		t.throws(throwSync());
	} catch (error) {
		setImmediate(() => {
			throw error;
		});
	}

	return new Promise(() => {});
});

function throwSync() {
	throw new Error('should be detected');
}
