const httpStatus = require('http-status')
const uniqid = require('uniqid')
const moment = require('moment')

const { Order, Customer } = require('../config/database/models')

const catchAsync = require('../utils/catchAsync')
const ApiError = require('../utils/ApiError')

const createOrder = catchAsync(async (req, res) => {
  // create unique order number  
  const date = moment().format('YYYYMMDDHHmmss');
  const uniqId = uniqid.time().toUpperCase();
  const orderNumber = `Order${date}${uniqId}`;

  const newOrder = await Order.create({
    orderNumber: orderNumber,
    customerId: req.user.id,
    totalPrice: req.body.totalPrice
  })

  res.status(201).json({
    status: 'Success',
    data: {
      newOrder
    }
  })
})

const findAllOrders = catchAsync(async (req, res) => {
  const orders = await Order.findAll({
    include: {
      model: Customer
    }
  })
  res.status(200).json({
    status: 'Success',
    data: {
      orders
    }
  })
})

const findOrderByCustomerId = catchAsync(async (req, res) => {
  const orders = await Order.findAll({
    where: {
      CustomerId: req.user.id
    },
    include: {
      model: Customer
    }
  })

  res.status(200).json({
    status: 'Success',
    data: {
      orders
    }
  })
})

const searchOrder = catchAsync(async (req, res) => {
  const order = await Order.findOne({
    where: {
      orderNumber: {
        [Op.substring]: req.query.orderNumber
      }
    }
  })

  res.status(200).json({
    status: 'Success',
    data: {
      order
    }
  })
})

const findOrderById = catchAsync(async (req, res) => {
  const id = req.params.id
  const order = TravelPackage.findOne(
    {
      where: {
        id: value
      }
    }
  )

  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, `Order with this id ${id} is not found`)
  }

  res.status(200).json({
    status: 'Success',
    data: {
      order
    }
  })
})

module.exports = {
  createOrder,
  findAllOrders,
  findOrderById,
  findOrderByCustomerId,
  searchOrder,
}
