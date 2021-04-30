import React from 'react'
import './App.css'

function App(){
    return <Admin dataProvider={restProvider('http://localhost:1234')}>
        <Resource
            name='posts'
            list={PostList}
            create={PostCreate}
            edit={PostEdit}
        />

        <Resource
            name='users'
            list={UserList}
            create={UserCreate}
            edit={UserEdit}
        />

    </Admin>
}
export default App