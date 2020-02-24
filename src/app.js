import { DOModel } from '../lib/domodel/index.js'

import ModelModel from './model/model.js'
import ModelBinding from './binding/model.js'

window.addEventListener("load", function() {
	DOModel.run(ModelModel, {
		binding: new ModelBinding(),
		parentNode: document.body
	})
})
