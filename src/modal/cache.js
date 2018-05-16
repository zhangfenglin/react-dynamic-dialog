export default class Cache {
  constructor(props) {
    const {trigger, key, opts = {}, isUsing = false} = props
    this.trigger = trigger
    this.key = key
    this.isUsing = isUsing
    this.opts = opts
  }
}
