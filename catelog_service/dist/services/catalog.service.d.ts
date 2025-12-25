import { type ICatelogRepository } from "../interface/catelogRepository.interface";
export declare class CatelogService {
    private _repository;
    constructor(repository: ICatelogRepository);
    createProduct(input: any): void;
    updateProduct(input: any): void;
    getMultipleProducts(input: any): void;
    getProduct(input: any): void;
    deleteProduct(input: any): void;
}
//# sourceMappingURL=catalog.service.d.ts.map