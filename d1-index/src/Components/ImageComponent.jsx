import { Component } from "react"

class ImageComponent extends Component {

    render() {
        return <img src={this.props.image} alt={this.props.alternate} style={{ height: this.props.pictureheight, width: this.props.picturewidth }} />
    }
}

export default ImageComponent