import React from "react";

import "./NotesView.css";

const NotesView = () => {
	return (
		<div>
			<h2>Things to know</h2>
			<ul>
				<li>The maximum proficiency is 5 and the minimum is -5</li>
				<li>
					Higher proficiency will make a word have a lower chance to
					appear and vice versa
				</li>
				<li>
					You need to export and save the JSON after adding or
					removing words
				</li>
			</ul>
		</div>
	);
};

export default NotesView;
