const Tags = ({ tags }) => {
  return (
    <div>
      {tags?.nodes.map((tag, i) => (
        <span key={i}>
          <span>{tag.name}</span>
          {i < tags.nodes.length - 1 && <span>, </span>}
        </span>
      ))}
    </div>
  );
};

export default Tags;
