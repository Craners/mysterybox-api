import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './customer-db.datasource.json';

export class CustomerDBDataSource extends juggler.DataSource {
  static dataSourceName = 'customerDB';

  constructor(
    @inject('datasources.config.customerDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
