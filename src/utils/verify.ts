import hmacValidator = require('hmac-validator');
import { ConfigService } from 'src/config.service';

export class Verify {
  private SHOPIFY_API_SECRET_KEY: string;

  constructor(config: ConfigService) {
    this.SHOPIFY_API_SECRET_KEY = config.get('SHOPIFY_API_SECRET_KEY');
  }

  verifyHmac(query: string) {
    const validate = hmacValidator({
      replacements: {
        both: {
          '&': '%26',
          '%': '%25',
        },
        keys: {
          '=': '%3D',
        },
      },
      excludedKeys: ['signature', 'hmac'],
      algorithm: 'sha256',
      format: 'hex',
      digestKey: 'hmac',
    });

    // 3. Verify signature
    return validate(this.SHOPIFY_API_SECRET_KEY, null, query);
  }
}
