'use strict';
const awsServerlessExpress = require('aws-serverless-express');
const app = require('./server');
const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) };


//Access Key ID:
//AKIAV7VEAZ6PJ5DAXNVW
//Secret Access Key:
//Po0OHGwuQa32+3FRgmlb3wND/q1WvBOzIdzhfFvB