import axios from 'axios';

/**
 * Fetches the coupons from the server
 * @param {object} queryParams - Search filter params to be sent
 * @return {Promise<Array>} response - Promise with the response
 */
const handleGetCoupons = (queryParams, meta) => {
  // Generate mock coupons
  let mockData = []
  console.log(queryParams);
  console.log(meta);
  for (let i = meta.offset; i < meta.offset + queryParams.resultsperpage; i++) {
    let mockCoupon = {
      id: i + 10,
      code: "ANANAY" + i,
      category: 'referral',
      cashback: Math.floor(Math.random() * 10000),
      mode: 'Flat',
      amount: Math.floor(Math.random() * 10000),
      left: Math.floor(Math.random() * 500),
      products: 'CB',
      active: 'true'
    };
    mockData.push(mockCoupon);
  }
  let mockResponse = {
    results: mockData,
    meta: {
      count: 100,
      offset: meta.offset
    }
  }
  // Prepare mock response
  let response = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockResponse);
    }, 100);
  });

  return response;
};

/**
 * Saves the coupon edits on the server
 * @param {object} queryParams – Save data to be sent
 * @return {Promise<string>} response – Returns if the request was
 *  successful or not
 */
const handleSaveCoupon = (queryParams) => {
  // Prepare mock response
  let response = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
  return response;
};

/**
 * Get coupon information from the server based on coupon ID
 * @param {int} id 
 * @return {Promise<object>} response – Coupon info object
 */
const handleGetCouponFromID = (id) => {
  // Mock coupon
  let couponInfo = {
    id,
    code: "ANANAY",
    category: 'referral',
    cashback: Math.floor(Math.random() * 10000),
    mode: 'Flat',
    amount: Math.floor(Math.random() * 10000),
    left: Math.floor(Math.random() * 500),
    products: 'CB',
    active: 'true'
  }
  // Prepare mock response
  let response = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(couponInfo);
    }, 1000);
  });
  return response;
}

/**
 * Sends the coupon info to the database
 * @param {object} queryParams – New coupon params
 * @return {Promise<string>} response – Server response
 */
const handleAddCoupon = (queryParams) => {
  // Prepare mock response
  let response = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
  return response;
}

/**
 * Sends the coupon ID to delete
 * @param {int} id 
 */
const handleDeleteCoupon = (id) => {
  // Prepare mock response
  let response = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    });
  });
  return response;
}

module.exports = {
  handleGetCoupons,
  handleSaveCoupon,
  handleGetCouponFromID,
  handleAddCoupon,
  handleDeleteCoupon
};