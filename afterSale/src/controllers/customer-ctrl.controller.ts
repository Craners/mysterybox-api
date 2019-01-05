import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import { Customer } from '../models';
import { CustomerRepository } from '../repositories';

export class CustomerCtrlController {
  constructor(
    @repository(CustomerRepository)
    public customerRepository: CustomerRepository,
  ) { }

  @post('/customers', {
    responses: {
      '200': {
        description: 'Customer model instance',
        content: { 'application/json': { 'x-ts-type': Customer } },
      },
    },
  })
  async create(@requestBody() customer: Customer): Promise<Customer> {
    return await this.customerRepository.create(customer);
  }

  @get('/customers/count', {
    responses: {
      '200': {
        description: 'Customer model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Customer)) where?: Where,
  ): Promise<Count> {
    return await this.customerRepository.count(where);
  }

  @get('/customers', {
    responses: {
      '200': {
        description: 'Array of Customer model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Customer } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Customer)) filter?: Filter,
  ): Promise<Customer[]> {
    return await this.customerRepository.find(filter);
  }

  @patch('/customers', {
    responses: {
      '200': {
        description: 'Customer PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() customer: Customer,
    @param.query.object('where', getWhereSchemaFor(Customer)) where?: Where,
  ): Promise<Count> {
    return await this.customerRepository.updateAll(customer, where);
  }

  @get('/customers/{id}', {
    responses: {
      '200': {
        description: 'Customer model instance',
        content: { 'application/json': { 'x-ts-type': Customer } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Customer> {
    let id2 = id.toString();
    return await this.customerRepository.findById(id2);
  }

  @patch('/customers/{id}', {
    responses: {
      '204': {
        description: 'Customer PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() customer: Customer,
  ): Promise<void> {
    let id2 = id.toString();
    await this.customerRepository.updateById(id2, customer);
  }

  @del('/customers/{id}', {
    responses: {
      '204': {
        description: 'Customer DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    let id2 = id.toString();
    await this.customerRepository.deleteById(id2);
  }
}
