// == Imports

import { connect } from 'react-redux';

import CartProduct from '../../../components/Cart/CartProduct';

import { updateProductQuantity } from '../../../actions/main';

const mapStateToProps = (state, ownProps) => ({
  productId: ownProps.productId,
  productImg: ownProps.productImg,
  productName: ownProps.productName,
  productQuantity: ownProps.productQuantity,
  productPrice: ownProps.productPrice,
  totalPrice: ownProps.totalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  updateProductQuantity: (productId, productQuantity) => {
    dispatch(updateProductQuantity(productId, productQuantity));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartProduct);
