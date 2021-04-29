import React from 'react'
import {Create, SimpleForm, TextInput} from 'react-admin'

const UserEdit = (props) => {
    return(
        <Create title='Edit a User' {...props}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='name'/>
                <TextInput source='email'/>
            </SimpleForm>
        </Create>
    )
}

export default UserEdit