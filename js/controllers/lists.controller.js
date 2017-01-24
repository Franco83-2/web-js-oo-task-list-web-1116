'use strict';
// Lists Controller
class ListsController {
  constructor() {
    this.$addListForm = $('#add_list')
    this.$listTitleInput = $('#list_title')
    this.$selectListMenu = $('#select_list')
    this.$addTaskForm = $('#add_task')
    this.$wrapper = $('#wrapper')
  }

  init() {
    this.$addTaskForm.hide()
    this.$addListForm.submit((evt) => {
      evt.preventDefault()
      this.$addTaskForm.show()
      new List(this.$listTitleInput.val()).build()
      $(".destroy-list").click(function() {
        this.parentElement.parentElement.remove()
      })
    })
  }

}
