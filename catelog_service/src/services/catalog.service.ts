import { type ICatelogRepository } from "../interface/catelogRepository.interface";

export class CatelogService {

    private _repository:  ICatelogRepository

    constructor(repository: ICatelogRepository) {
        this._repository = repository;
    }

    createProduct(input: any) {}
    updateProduct(input: any) {}
    getMultipleProducts(input: any) {}
    getProduct(input: any) {}
    deleteProduct(input: any) {}
    
}

exports.CatelogService = CatelogService;
