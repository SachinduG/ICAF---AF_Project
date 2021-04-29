import React from 'react'
import {Create, SimpleForm, TextInput, DateInput} from 'react-admin'

const PostEdit = (props) => {
    return(
        <Create title='Edit a Post' {...props}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='title'/>
                <TextInput multiline source='body'/>
                <DateInput label='Published' source='publishedAt'/>
            </SimpleForm>
        </Create>
    )
}

export default PostEdit