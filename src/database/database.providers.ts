import mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        'mongodb://radu:test12@ds125723.mlab.com:25723/aftersale',
      ),
  },
];
