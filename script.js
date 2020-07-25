var add_todo_btn = document.getElementById('add-btn');
var todo_input = document.getElementById('todo-input');
var list = document.getElementById('list');
add_todo_btn.addEventListener('click', function () {
    var todo = todo_input.value;

    var item = document.createElement('DIV');
    item.classList.add('item');
    var item_text = document.createElement('DIV');
    item_text.classList.add('item-text');
    item_text.textContent = todo;
    var edit_input = document.createElement('INPUT');
    edit_input.classList.add('edit-input');
    edit_input.classList.add('hide');
    edit_input.name = 'edit-input';
    edit_input.type = 'text';
    edit_input.value = todo;

    var edit_input_btn = document.createElement('BUTTON');
    edit_input_btn.textContent = 'UPDATE';
    edit_input_btn.classList.add('action-btn');
    edit_input_btn.classList.add('update-btn');
    edit_input_btn.classList.add('hide');
    edit_input_btn.type = 'button';

    var action_btns = document.createElement('DIV');
    action_btns.classList.add('action-btns');

    var edit_btn = document.createElement('BUTTON');
    edit_btn.classList.add('action-btn');
    edit_btn.classList.add('edit-btn');
    edit_btn.textContent = 'EDIT';
