import React from "react";
import { Link, navigate, Redirect } from "@reach/router";

class ErrorBoundries extends React.Component {
  state = { haserror: false };
  static getDerivedStateFromError() {
    return { haserror: true, redirect: false };
  }
  componentDidCatch(error, info) {
    console.error("error boundry caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.haserror) {
      setTimeout(() => navigate("/"), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.haserror) {
      return (
        <h1>
          there was an error with this listing. <Link to="/"> Click here</Link>{" "}
          to go back to the home page or wait for 5 seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundries;
