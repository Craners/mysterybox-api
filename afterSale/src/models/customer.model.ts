import { Entity, model, property } from '@loopback/repository';

@model()
export class Customer extends Entity {

  @property({
    type: 'number',
    id: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  state?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  accept_marketing?: boolean;

  @property({
    type: 'string',
  })
  created_at?: string;

  @property({
    type: 'string',
  })
  updated_at?: string;

  @property({
    type: 'string',
  })
  first_name?: string;

  @property({
    type: 'string',
  })
  last_name?: string;

  @property({
    type: 'number',
  })
  orders_count?: number;

  @property({
    type: 'string',
  })
  total_spent?: string;

  @property({
    type: 'number',
  })
  last_order_id?: number;

  @property({
    type: 'string',
  })
  note?: string;

  @property({
    type: 'boolean',
    required: true,
    default: false,
  })
  verified_email: boolean;

  @property({
    type: 'string',
  })
  multipass_identifier?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  tax_exempt?: boolean;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
  })
  tags?: string;

  @property({
    type: 'string',
  })
  last_order_name?: string;

  @property({
    type: 'string',
  })
  currency?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  addresses?: object[];

  @property({
    type: 'string',
  })
  admin_graphql_api_id?: string;

  @property({
    type: 'object',
  })
  default_address?: object;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}
