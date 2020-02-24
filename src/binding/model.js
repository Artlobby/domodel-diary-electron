import { DOModel, Binding } from '../../lib/domodel/index.js'

export default class extends Binding {

	async onCreated() {
		// const { prop } = this.props

		this.root.textContent = "Hello..."
	}

}
