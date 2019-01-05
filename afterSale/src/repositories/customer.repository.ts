import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Customer} from '../models';
import {CustomerDBDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.state
> {
  constructor(
    @inject('datasources.customerDB') dataSource: CustomerDBDataSource,
  ) {
    super(Customer, dataSource);
  }
}
