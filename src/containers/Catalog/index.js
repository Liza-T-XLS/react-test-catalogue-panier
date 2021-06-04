// == Imports

import { connect } from 'react-redux';

import Catalog from '../../components/Catalog';
import {
  loadProducts,
} from '../../actions/main';

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => {
    dispatch(loadProducts());
  },
});

// == Export

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Catalog);
