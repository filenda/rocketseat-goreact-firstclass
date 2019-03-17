import React, { Component } from "react"; //  this 'fragment' component should wrap every component's return content
import PropTypes from "prop-types";

//bellow is the expected format for an 'stateless' component
//'props.children' represents what goes inside the tags of
//whom implements this component (<Button>Children</Button>)
const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
);

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Button;

//bellow is the expected format for an 'stateful' component
// export default class Button extends Component {
//   static defaultProps = {
//     children: "Salvar"
//   };

//   static propTypes = {
//     onClick: PropTypes.func.isRequired,
//     children: PropTypes.string
//   };

//   render() {
//     return <button onClick={this.props.onClick}>{this.props.children}</button>;
//   }
// }
