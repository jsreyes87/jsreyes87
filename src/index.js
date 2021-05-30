import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';



const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Monday at 4:30PM" comment="Hi.!! There " image={faker.image.avatar()} />
            <CommentDetail author="Joahn" timeAgo="Today at 3:30PM" comment="Comment something!!" image={faker.image.avatar()} />
            <CommentDetail author="Josh" timeAgo="Yesterday at 10:30AM" comment="Blessing!!!" image={faker.image.avatar()} />
            <CommentDetail author="Laura" timeAgo="Today at 4:20PM" comment="Hi.!!" image={faker.image.avatar()} />
            <CommentDetail author="Axel" timeAgo="Today at 4:30PM" comment="Hi.!!" image={faker.image.avatar()} />
        </div>
    );
}


ReactDOM.render(<App />, document.querySelector('#root')); 