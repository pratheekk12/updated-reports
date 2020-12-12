import { distributorOrders, distributorInvoices } from './reducers';

export default function getDashboardModule() {
  return {
    // Unique id of the module
    id: 'dash360',
    // Maps the Store key to the reducer
    reducerMap: {
      distributorOrders,
      distributorInvoices
    }
    // This module uses redux-saga middleware
    // This property will be be used by the SagaExtension
    // to run sagas for the moduleD
  };
}
