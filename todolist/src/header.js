import React from 'react';

const Header = () => {
    const addTaskItem = () => {
        console.log('Clicked Add button...');
        console.log(document.getElementById('item-input').value);
    }
    
    return (
      <div id={"list-header"}>
        <h2>To-Do List</h2>
        <div id={"input-box"}>
          <input
            id={"item-input"}
            type={"text"}
            className={"add-input"}
            placeholder={"Add new item..."}
            default={null}
          />
          <input
            id={"add-button"}
            type={"button"}
            className={"add-input"}
            value={"Add"}
            onClick={event => 
                addTaskItem()
            }
          />
        </div>
      </div>
    );
}

export default Header;