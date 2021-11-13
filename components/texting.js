// components/text.js
Component({
  /**
   * Component properties
   */
  properties: {
    quote: {type: String, value: "this is the default quote"},
    color: String
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    buttonTap(){
      this.triggerEvent('changeTrue', {name: 'Michael', })
      // triggerEvent calls a function in the parent
      // changeTrue is the name of the binding (we used to bind to a tap, now we bind to this)
      // {.....} this is the data that we are sending back with the binding
    },
  }
})
