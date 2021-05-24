import React from 'react';

class DmCustomEmbed extends React.Component {

    constructor(props) {
        super(props);
    
        this.refContainer = (container) => {
          this.container = container;
        };
    }
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://srvr.dmvs-apac.com/v2/dm-ce.min.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
    
        return (
          <div
            {...this.props}
            className="dm-player"
            ref={this.refContainer}
          />
        );
    }
}

export default DmCustomEmbed;