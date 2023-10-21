import React from "react";
import renderer from 'react-test-renderer';
import UserProfile from ".";

it('renders corrrectly when there is a user',()=>{
    const user ={name: 'Vikram', email: 'vikram@exapmple.com'};
    const tree = renderer.create(<UserProfile user={user} />).toJSON();
    expect(tree).toMatchSnapshot();
})
it('renders corrrectly when there is a user',()=>{
    const tree = renderer.create(<UserProfile/>).toJSON();
    expect(tree).toMatchSnapshot();
})