### _.debounce

Create a new function that calls _func_ with _thisArg_ and _args_.

  ```js
 function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
}

// Avoid costly calculations while the window size is in flux.
jQuery(window).on('resize', debounce(calculateLayout, 150));

  ```
#### Browser Support for `debounce`

![Chrome][chrome-image] | ![Edge][edge-image] | ![Firefox][firefox-image] | ![IE][ie-image] | ![Opera][opera-image] | ![Safari][safari-image]
 :-: | :-: | :-: | :-: | :-: | :-: |
  7.0 ✔  |  ✔ | 4.0 ✔ |  9.0 ✔ |  11.6 ✔ |  5.1 ✔  |

 **[⬆ back to top](#quick-links)**

