import { type ICatelogRepository } from "../interface/catelogRepository.interface";
import { Product } from "../models/product.model";

export class CatelogRepository implements ICatelogRepository {
    update(data: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    delete(id: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    find(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    create(data: Product): Promise<Product> {
        throw new Error("Method Not Implemented");
    }

}