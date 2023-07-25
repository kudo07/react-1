import * as React from "react";
class MySections extends React.Component {
    render() {
        return(
            <section>
                <h2>
                    MySectn
                </h2>
                {this.props.children}
            </section>
        )
    }
}
export default MySections;