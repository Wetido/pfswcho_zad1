import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { InjectRepository } from '@nestjs/typeorm';
import { FibonacciValues } from './app.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
    @InjectRepository(FibonacciValues)
    private fibonacciValuesRepository: Repository<FibonacciValues>,
  ) {}

  async countFibonacci(index) {
    if (parseInt(index) === 0) {
      await this.cache.set(index, 0, { ttl: 3600 });
      return 0;
    } else if (parseInt(index) === 1) {
      await this.cache.set(index, 1, { ttl: 3600 });
      return 1;
    } else {
      let firstElem = 1;
      let secondElem = 1;
      let result;
      for (let i = 2; i <= index; i++) {
        result = firstElem + secondElem;
        await this.cache.set(i, result, { ttl: 3600 });
        firstElem = secondElem;
        secondElem = result;
      }
      return result;
    }
  }

  async getRedisValueByIndex(index: number): Promise<number> {
    let value = (await this.cache.get(index)) || null;

    if (value === null) {
      value = await this.getFibonacciValueByIndex(index);
      console.log('dbValue = ', value);
      if (value === undefined) {
        value = this.countFibonacci(index);
      }
    }

    try {
      await this.saveFibonacciValue(index, value);
    } catch (exception) {}

    return value;
  }

  async saveFibonacciValue(index: number, value: number) {
    const fibonacciValues = new FibonacciValues();

    fibonacciValues.index = `${index}`;
    fibonacciValues.value = `${value}`;

    await this.fibonacciValuesRepository.save(fibonacciValues);
  }

  async getFibonacciValueByIndex(index: number) {
    return await this.fibonacciValuesRepository
      .createQueryBuilder('fibonacci')
      .where(`fibonacci.index = '${index}'`)
      .getOne();
  }
}
