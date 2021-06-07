class LastPosts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
            return (

            <div className="container-latest-news-necro">
                <div className="mod mod--lastesnews">
                    <div className="mod__header">
                        <h3 className="mod__title">
                            Lo Último
						</h3>
                    </div>
                </div>
            </div>
            );
    }
}

render(
    <LastPosts  />,
    document.getElementById('app')
);
