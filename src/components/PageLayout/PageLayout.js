import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Topbar } from '../../containers';

const scrollToTop = () => {
  // Todo: this might need fine tuning later
  window.scrollTo(0, 0);
};

class PageLayout extends Component {
  componentDidMount() {
    this.historyUnlisten = this.context.history.listen(() => scrollToTop());
  }

  componentWillUnmount() {
    this.historyUnlisten();
  }

  render() {
    const { className, title, children } = this.props;
    return (
      <div className={className}>
        <Helmet title={title} />
        <Topbar />
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}

const { any, object, string } = PropTypes;

PageLayout.contextTypes = { history: object };

PageLayout.defaultProps = { className: '', children: null };

PageLayout.propTypes = { className: string, title: string.isRequired, children: any };

export default PageLayout;