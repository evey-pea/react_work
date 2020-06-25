import React from "react";
// import Header from './header';
// import List from './list';

import ListItem from './listItem';

const App = () => {

    const myListItems = ["take out trash", "walk dog", "brush teeth"];
    
    return (
      <main>
        {myListItems.map((todo) => (
          <ListItem todoText={todo} />
        ))}
      </main>
    );
};

export default App;

