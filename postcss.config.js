export default {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		'postcss-discard': {rule: function(node, value)
		{
			if(!value.startsWith('.fa-') || !value.endsWith(":before"))
				return false;
			switch(value)
			{
				case '.fa-info-circle:before':
				case '.fa-wifi:before':
				case '.fa-microchip:before':
				case '.fa-compact-disc:before':
				case '.fa-discord:before':
				case '.fa-github:before':
				case '.fa-star:before':
				case '.fa-circle:before':
				case '.fa-trash-can:before':
				case '.fa-book-open:before':
					return false;
			}
			return true;
		}}
	},
}
