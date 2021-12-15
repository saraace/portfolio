const Tags = ({ tags }) => {
	return (
		<div>
			{tags?.map((tag, i) => (
				<span key={i}>
					<span>{tag.title}</span>
					{i < tags.length - 1 && <span>, </span>}
				</span>
			))}
		</div>
	);
};

export default Tags;
