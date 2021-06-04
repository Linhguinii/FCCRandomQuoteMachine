import * as Redux from "https://cdn.skypack.dev/redux@4.1.0";
import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";



class Box extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Button, null), /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: "https://twitter.com/intent/tweet", target: "_blank" }, "Tweet")));


  }}


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '"Life isn\'t about finding yourself. Life is about creating yourself."',
      author: '- George Bernard Shaw' };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var quotes = ['Work hard in silence, let your success be the noise.', 'No matter how long you have traveled in the wrong direction,  you can always turn around.', 'When you arise in the morning, think of what a privilege it is to be alive: to breath, to think, to enjoy, to love.'];
    var authors = ['-Your Positive Oasis', '- Unknown', '- Marcus Aurelius'];
    const random = Math.floor(Math.random() * quotes.length);
    this.setState({
      quote: quotes[random],
      author: authors[random] });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", { id: "text" }, this.state.quote), /*#__PURE__*/
      React.createElement("p", { id: "author", style: { textAlign: "right" } }, this.state.author), /*#__PURE__*/
      React.createElement("button", { id: "new-quote", onClick: this.handleClick }, "New quote")));


  }}
;

class Quote extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote", handleClick: this.props.handleClick }, "Placeholder"));

  }}

ReactDOM.render( /*#__PURE__*/React.createElement(Box, null), document.getElementById('quote-box'));