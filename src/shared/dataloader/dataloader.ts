import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';

@Injectable({ scope: Scope.REQUEST })
export abstract class BaseDataLoader<K, V, C = K> {
  protected dataloader: DataLoader<K, V, C> = new DataLoader(
    this.batchLoad.bind(this),
  );

  public clear(key: K): DataLoader<K, V, C> {
    return this.dataloader.clear(key);
  }

  public clearAll(): DataLoader<K, V, C> {
    return this.dataloader.clearAll();
  }

  public async load(key: K): Promise<V> {
    return this.dataloader.load(key);
  }

  public async loadMany(keys: ArrayLike<K>): Promise<(V | Error)[]> {
    return this.dataloader.loadMany(keys);
  }

  public prime(key: K, value: V): DataLoader<K, V> {
    return this.dataloader.prime(key, value);
  }

  protected abstract batchLoad(keys: K[]): Promise<V[]>;
}
