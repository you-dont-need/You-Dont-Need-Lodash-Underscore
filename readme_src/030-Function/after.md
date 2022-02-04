### _.after
:heavy_exclamation_mark:`Note this is an alternative implementation`
Creates a version of the function that will only be run after first being called count times. Useful for grouping asynchronous responses, where you want to be sure that all the async calls have finished, before proceeding.

  ```js
  var notes = ['profile', 'settings']
  // Underscore/Lodash
  var renderNotes = _.after(notes.length, render)
  notes.forEach(function (note) {
    console.log(note)
    renderNotes()
  })

  // Native
  notes.forEach(function (note, index) {
    console.log(note)
    if (notes.length === (index + 1)) {
      render()
    }
  })
  ```
