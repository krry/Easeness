const Dinkus = props => {
	const { text } = props;
	return <hr className="dinkus" data-content={text} />;
};

export default Dinkus;
