import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

export default class App extends React.Component {
    state = {
        showLightbox: false
    };

    render() {
        const { showLightbox } = this.state;
        return (
            <div>
                <a className="link" onClick={this.openLightbox}>
                    Clickme
                </a>
                {showLightbox && (
                    <div className="lightbox-container">
                        <div className="lightbox-overlay" />
                        <div className="lightbox-content">
                            <div className="lightbox-close" onClick={this.closeLightbox}>
                                x
                            </div>
                            <div>lightbox content</div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    openLightbox = () => {
        document.body.style.overflow = "hidden";
        this.setState({ showLightbox: true });
    };

    closeLightbox = () => {
        document.body.style.overflow = "auto";
        this.setState({ showLightbox: false });
    };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

