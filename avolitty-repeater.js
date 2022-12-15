const avolittyRepeater = function(_0_0, _0_1) {
	let _0_2 = []
	let _0_3 = _0_1 + _0_1
	let _0_4 = 2
	let _0_5 = 0

	if (_0_0 == "" || _0_1 == 0) {
		return ""
	}

	while ((_0_3 >>= 1) != 1) {
		_0_2[_0_5++] = [_0_0, _0_4 >> 1]
		_0_0 += _0_0
		_0_4 <<= 1
	}

	_0_4 >>= 1

	while (_0_1 != _0_4) {
		_0_3 = _0_2[--_0_5][1] + _0_4

		if (_0_1 >= _0_3) {
			_0_0 += _0_2[_0_5][0]
			_0_4 = _0_3
		}
	}

	return _0_0
}

if (typeof module != "undefined" && module.exports != void 0) {
	module.exports = avolittyRepeater
}
