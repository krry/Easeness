module.exports = {
	// extends: [],
	rules: {
		indentation: 'tab',
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'apply',
					'variants',
					'responsive',
					'screen',
					'layer',
				],
			},
		],
		'declaration-block-trailing-semicolon': null,
		'no-descending-specificity': null,
		'declaration-empty-line-before': null,
	},
}
