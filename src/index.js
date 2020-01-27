// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a React component
const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning!</h4>
					Are you sure?
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.findName()} 
					avatar={faker.image.avatar()} 
					time="Today at 6:00PM" 
					text={faker.lorem.sentence()} 
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.findName()} 
					avatar={faker.image.avatar()} 
					time="Yesterday at 4:30PM" 
					text={faker.lorem.sentence()} 
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.findName()} 
					avatar={faker.image.avatar()} 
					time="Two days ago at 6:39AM" 
					text={faker.lorem.sentence()} 
				/>
			</ApprovalCard>
		</div>
	);
};

// Take the React component and show on the screen
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);