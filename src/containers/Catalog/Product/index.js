// == Imports

import { connect } from 'react-redux';

import Product from '../../../components/Catalog/Product';
import {
  saveProductToCart,
} from '../../../actions/main';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  saveProductToCart: (productId, productImg, productName, productQuantity, productPrice) => {
    dispatch(saveProductToCart(productId, productImg, productName, productQuantity, productPrice));
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
