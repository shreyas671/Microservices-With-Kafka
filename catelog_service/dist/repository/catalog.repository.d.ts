import { type ICatelogRepository } from "../interface/catelogRepository.interface";
import { Product } from "../models/product.model";
export declare class CatelogRepository implements ICatelogRepository {
    update(data: Product): Promise<Product>;
    delete(id: Product): Promise<Product>;
    find(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    create(data: Product): Promise<Product>;
}
//# sourceMappingURL=catalog.repository.d.ts.map