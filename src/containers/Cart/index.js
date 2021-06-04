// == Imports

import { connect } from 'react-redux';

import Cart from '../../components/Cart';

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({

});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
