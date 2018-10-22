import * as React from "react"
import { RouteComponentProps, withRouter } from "react-router-dom"

interface PropType extends RouteComponentProps<{}>, React.Props<{}> {
  location: any
}

class ScrollToTop extends React.Component<PropType> {
  public componentDidUpdate(prevProps: PropType) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  public render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
